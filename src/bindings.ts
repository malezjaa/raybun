import {ptr, CString, dlopen, FFIType, suffix} from "bun:ffi";

const path = `libraylib.${suffix}`;

export const {symbols: raylib} = dlopen(path, {
    InitWindow: {
        args: [FFIType.i32, FFIType.i32, FFIType.cstring],
        returns: FFIType.void,
    },
    WindowShouldClose: {
        args: [],
        returns: FFIType.bool,
    },
    BeginDrawing: {
        args: [],
        returns: FFIType.void,
    },
    EndDrawing: {
        args: [],
        returns: FFIType.void,
    },
    CloseWindow: {
        args: [],
        returns: FFIType.void,
    },
    ClearBackground: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    DrawText: {
        args: [FFIType.cstring, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    SetTargetFPS: {
        args: [FFIType.i32],
        returns: FFIType.void
    }
});