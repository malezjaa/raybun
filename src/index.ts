import {raylib} from "./bindings.ts";
import {ptr} from "bun:ffi";

export const cstr = (str: string) => ptr(Buffer.from(str + "\0"));