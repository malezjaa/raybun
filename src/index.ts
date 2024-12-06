import {raylib} from "./bindings.ts";
import {ptr} from "bun:ffi";

export const cstr = (str: string) => ptr(Buffer.from(str + "\0"));

export * from "./enums.ts"
export * from "./color.ts"
export * from "./vectors.ts"
export * from "./window.ts"