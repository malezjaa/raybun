import Parser, {type SyntaxNode} from "tree-sitter";
import C from "tree-sitter-c";
import {writeFile} from "fs/promises";
import {styleText} from "util"

const parser = new Parser();
parser.setLanguage(C);

const code = await Bun.file("./raylib.h").text();
const tree = parser.parse(code);

const functions: string[] = [];
const faults: string[] = [];
const structs: string[] = [];

/**
 * Extracts type information from a node's children.
 */
const extractType = (children: SyntaxNode[]): ParsedType => {
    const type: ParsedType = {
        qualifiers: [],
        type: "",
        pointer: false,
    };

    for (const child of children) {
        switch (child.type) {
            case "identifier":
                type.name = child.text;
                break;
            case "primitive_type":
            case "type_identifier":
            case "ERROR":
            case "sized_type_specifier":
                type.type = child.text;
                break;
            case "pointer_declarator":
                type.pointer = true;
                break;
            case "type_qualifier":
                type.qualifiers.push(child.text);
                break;
            default:
                faults.push("Unknown type node: " + child.type);
        }
    }

    return type;
};

/**
 * Maps a parsed type to an FFI type.
 */
const mapType = (type: ParsedType): string => {
    if (type.pointer) {
        if (type.qualifiers.includes("const") && type.type === "char") {
            return "cstring";
        }
        if (type.type === "unsigned char") {
            return "u8";
        }
        return "ptr";
    }

    switch (type.type) {
        case "int":
            return "i32";
        case "unsigned int":
            return "u32";
        case "float":
            return "f32";
        case "double":
            return "f64";
        case "bool":
            return "bool";
        case "char":
            return "i8";
        case "void":
            return "void";
        default:
            return "ptr";
    }
};

type ParsedType = {
    name?: string;
    type: string;
    qualifiers: string[];
    pointer: boolean;
}

/**
 * Recursively extracts function declarations from the syntax tree.
 */
const generateFunctions = (node: SyntaxNode) => {
    if (node.type === "function_declarator") {
        const name = node.children.find((n) => n.type === "identifier")?.text;
        if (!name) {
            faults.push("Function without name");
            return;
        }

        let returnType: ParsedType = {
            type: "void",
            qualifiers: [],
            pointer: false,
        }

        if (node.previousSibling) {
            // @ts-ignore
            let decl = node.parent.type === "declaration" ? node.parent.children : node.parent.parent.children

            if (decl) {
                if (decl[0].text === "RLAPI") {
                    decl.shift()
                }

                decl = decl.filter((n) =>
                    n.type === "identifier" || n.type === "primitive_type" || n.type === "type_identifier" || n.type === "pointer_declarator" || n.type === "type_qualifier"
                    || n.type === "sized_type_specifier" || n.type === "ERROR"
                )

                returnType = extractType(decl)
            }
        }


        const paramsNode = node.children.find((n) => n.type === "parameter_list");
        const args: ParsedType[] = paramsNode
            ? paramsNode.children
                .filter((n) => n.type === "parameter_declaration")
                .map((param) => extractType(param.children))
            : [];

        // Handle void arguments
        if (args.length === 1 && args[0].type === "void") {
            args.pop();
        }

        functions.push(`
    ${name}: {
        args: [${args.map((arg) => `FFIType.${mapType(arg)}`).join(", ")}],
        returns: FFIType.${mapType(returnType)},
    },`);
    }

    for (const child of node.children) {
        generateFunctions(child);
    }
};

/**
 * Recursively extracts struct definitions.
 */
const extractStructs = (node: SyntaxNode) => {
    if (node.type === "type_definition") {
        const idents = node.children.filter((n) => n.type === "type_identifier");
        structs.push(...idents.map((ident) => ident.text));
    }

    for (const child of node.children) {
        extractStructs(child);
    }
};

generateFunctions(tree.rootNode);

const generatedCode = `
import {
    dlopen, FFIType, suffix
} from "bun:ffi";

const path = \`libraylib.\${suffix}\`;

export const { symbols: raylib } = dlopen(path, {
    ${functions.join("")}
});
`;

await writeFile("../src/bindings.ts", generatedCode);
console.log(`Generated ${functions.length} functions with ${faults.length} faults.`);

for (const fault of faults) {
    console.log(`${styleText("yellow", "warn")} ${fault}`);
}

/// Enums

let enumsFaults: string[] = [];
type ParsedEnum = {
    name: string;
    values: { name: string, value?: number, comment?: string }[];
}
let enums: ParsedEnum[] = [];

function generateEnums(node: SyntaxNode) {
    if (node.type === "enum_specifier") {
        let name = node.nextSibling?.text;

        if (name === "bool") {
            return;
        }

        if (!name) {
            enumsFaults.push("Enum without name");
            return;
        }

        let values: { name: string, value?: number, comment?: string }[] = [];

        let valuesNode = node.children.find((n) => n.type === "enumerator_list");

        for (const child of valuesNode?.children || []) {
            if (child.type === "enumerator") {
                let value = child.children.find((n) => n.type === "number_literal");
                let comment;
                if (child?.nextSibling?.type === ",") {
                    comment = child?.nextSibling?.nextSibling?.text
                } else if (child?.nextSibling?.type === "comment") {
                    comment = child?.nextSibling?.text
                }
                values.push({
                    name: child.children.find((n) => n.type === "identifier")?.text || "",
                    value: value ? parseInt(value.text) : undefined,
                    comment
                });
            }
        }

        enums.push({name, values});
    }

    for (const child of node.children) {
        generateEnums(child);
    }
}

generateEnums(tree.rootNode);

let generatedEnumsCode = ``

for (const enumDef of enums) {
    console.log(enumDef.values)
    generatedEnumsCode += `export enum ${enumDef.name} {`

    for (const value of enumDef.values) {
        let comment = value.comment ? ` ${value.comment}` : "";
        if (value.value !== undefined) {
            generatedEnumsCode += `
    ${value.name} = ${value.value},${comment}`;
        } else {
            generatedEnumsCode += `
    ${value.name},${comment}`;
        }
    }

    generatedEnumsCode += `\n}\n`;
}

await writeFile("../src/enums.ts", generatedEnumsCode);
console.log(`Generated ${enums.length} enums with ${enumsFaults.length} faults.`);

for (const fault of enumsFaults) {
    console.log(`${styleText("yellow", "warn")} ${fault}`);
}