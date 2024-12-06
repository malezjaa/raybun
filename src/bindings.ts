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
    },
    MaximizeWindow: {
        args: [],
        returns: FFIType.void,
    },
    MinimizeWindow: {
        args: [],
        returns: FFIType.void,
    },
    RestoreWindow: {
        args: [],
        returns: FFIType.void,
    },
    ToggleFullscreen: {
        args: [],
        returns: FFIType.void,
    },
    ToggleBorderlessWindowed: {
        args: [],
        returns: FFIType.void,
    },
    SetWindowMinSize: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    SetWindowMaxSize: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    SetWindowSize: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    GetScreenWidth: {
        args: [],
        returns: FFIType.i32,
    },
    GetScreenHeight: {
        args: [],
        returns: FFIType.i32,
    },
    GetRenderWidth: {
        args: [],
        returns: FFIType.i32,
    },
    GetRenderHeight: {
        args: [],
        returns: FFIType.i32,
    },
    IsWindowReady: {
        args: [],
        returns: FFIType.bool,
    },
    IsWindowFullscreen: {
        args: [],
        returns: FFIType.bool,
    },
    IsWindowHidden: {
        args: [],
        returns: FFIType.bool,
    },
    IsWindowMinimized: {
        args: [],
        returns: FFIType.bool,
    },
    IsWindowMaximized: {
        args: [],
        returns: FFIType.bool,
    },
    IsWindowFocused: {
        args: [],
        returns: FFIType.bool,
    },
    IsWindowResized: {
        args: [],
        returns: FFIType.bool,
    },
});