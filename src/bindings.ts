
import {
    dlopen, FFIType, suffix
} from "bun:ffi";

const path = `libraylib.${suffix}`;

export const { symbols: raylib } = dlopen(path, {
    
    InitWindow: {
        args: [FFIType.i32, FFIType.i32, FFIType.cstring],
        returns: FFIType.void,
    },
    CloseWindow: {
        args: [],
        returns: FFIType.void,
    },
    WindowShouldClose: {
        args: [],
        returns: FFIType.bool,
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
    IsWindowState: {
        args: [FFIType.u32],
        returns: FFIType.bool,
    },
    SetWindowState: {
        args: [FFIType.u32],
        returns: FFIType.void,
    },
    ClearWindowState: {
        args: [FFIType.u32],
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
    SetWindowIcon: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    SetWindowIcons: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    SetWindowTitle: {
        args: [FFIType.cstring],
        returns: FFIType.void,
    },
    SetWindowPosition: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    SetWindowMonitor: {
        args: [FFIType.i32],
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
    SetWindowOpacity: {
        args: [FFIType.f32],
        returns: FFIType.void,
    },
    SetWindowFocused: {
        args: [],
        returns: FFIType.void,
    },
    GetWindowHandle: {
        args: [],
        returns: FFIType.ptr,
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
    GetMonitorCount: {
        args: [],
        returns: FFIType.i32,
    },
    GetCurrentMonitor: {
        args: [],
        returns: FFIType.i32,
    },
    GetMonitorPosition: {
        args: [FFIType.i32],
        returns: FFIType.ptr,
    },
    GetMonitorWidth: {
        args: [FFIType.i32],
        returns: FFIType.i32,
    },
    GetMonitorHeight: {
        args: [FFIType.i32],
        returns: FFIType.i32,
    },
    GetMonitorPhysicalWidth: {
        args: [FFIType.i32],
        returns: FFIType.i32,
    },
    GetMonitorPhysicalHeight: {
        args: [FFIType.i32],
        returns: FFIType.i32,
    },
    GetMonitorRefreshRate: {
        args: [FFIType.i32],
        returns: FFIType.i32,
    },
    GetMonitorName: {
        args: [FFIType.i32],
        returns: FFIType.cstring,
    },
    SetClipboardText: {
        args: [FFIType.cstring],
        returns: FFIType.void,
    },
    GetClipboardText: {
        args: [],
        returns: FFIType.cstring,
    },
    EnableEventWaiting: {
        args: [],
        returns: FFIType.void,
    },
    DisableEventWaiting: {
        args: [],
        returns: FFIType.void,
    },
    ShowCursor: {
        args: [],
        returns: FFIType.void,
    },
    HideCursor: {
        args: [],
        returns: FFIType.void,
    },
    IsCursorHidden: {
        args: [],
        returns: FFIType.bool,
    },
    EnableCursor: {
        args: [],
        returns: FFIType.void,
    },
    DisableCursor: {
        args: [],
        returns: FFIType.void,
    },
    IsCursorOnScreen: {
        args: [],
        returns: FFIType.bool,
    },
    ClearBackground: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    BeginDrawing: {
        args: [],
        returns: FFIType.void,
    },
    EndDrawing: {
        args: [],
        returns: FFIType.void,
    },
    BeginMode2D: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    EndMode2D: {
        args: [],
        returns: FFIType.void,
    },
    BeginMode3D: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    EndMode3D: {
        args: [],
        returns: FFIType.void,
    },
    BeginTextureMode: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    EndTextureMode: {
        args: [],
        returns: FFIType.void,
    },
    BeginShaderMode: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    EndShaderMode: {
        args: [],
        returns: FFIType.void,
    },
    BeginBlendMode: {
        args: [FFIType.i32],
        returns: FFIType.void,
    },
    EndBlendMode: {
        args: [],
        returns: FFIType.void,
    },
    BeginScissorMode: {
        args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    EndScissorMode: {
        args: [],
        returns: FFIType.void,
    },
    BeginVrStereoMode: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    EndVrStereoMode: {
        args: [],
        returns: FFIType.void,
    },
    LoadVrStereoConfig: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    UnloadVrStereoConfig: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    LoadShader: {
        args: [FFIType.cstring, FFIType.cstring],
        returns: FFIType.ptr,
    },
    LoadShaderFromMemory: {
        args: [FFIType.cstring, FFIType.cstring],
        returns: FFIType.ptr,
    },
    IsShaderValid: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    GetShaderLocation: {
        args: [FFIType.ptr, FFIType.cstring],
        returns: FFIType.i32,
    },
    GetShaderLocationAttrib: {
        args: [FFIType.ptr, FFIType.cstring],
        returns: FFIType.i32,
    },
    SetShaderValue: {
        args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    SetShaderValueV: {
        args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    SetShaderValueMatrix: {
        args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    SetShaderValueTexture: {
        args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    UnloadShader: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    GetScreenToWorldRay: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    GetScreenToWorldRayEx: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    GetWorldToScreen: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    GetWorldToScreenEx: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    GetWorldToScreen2D: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    GetScreenToWorld2D: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    GetCameraMatrix: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    GetCameraMatrix2D: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    SetTargetFPS: {
        args: [FFIType.i32],
        returns: FFIType.void,
    },
    GetFPS: {
        args: [],
        returns: FFIType.i32,
    },
    SwapScreenBuffer: {
        args: [],
        returns: FFIType.void,
    },
    PollInputEvents: {
        args: [],
        returns: FFIType.void,
    },
    WaitTime: {
        args: [FFIType.f64],
        returns: FFIType.void,
    },
    SetRandomSeed: {
        args: [FFIType.u32],
        returns: FFIType.void,
    },
    GetRandomValue: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.i32,
    },
    LoadRandomSequence: {
        args: [FFIType.u32, FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    UnloadRandomSequence: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    TakeScreenshot: {
        args: [FFIType.cstring],
        returns: FFIType.void,
    },
    SetConfigFlags: {
        args: [FFIType.u32],
        returns: FFIType.void,
    },
    OpenURL: {
        args: [FFIType.cstring],
        returns: FFIType.void,
    },
    TraceLog: {
        args: [FFIType.i32, FFIType.cstring],
        returns: FFIType.void,
    },
    SetTraceLogLevel: {
        args: [FFIType.i32],
        returns: FFIType.void,
    },
    MemAlloc: {
        args: [FFIType.u32],
        returns: FFIType.ptr,
    },
    MemRealloc: {
        args: [FFIType.ptr, FFIType.u32],
        returns: FFIType.ptr,
    },
    MemFree: {
        args: [],
        returns: FFIType.void,
    },
    SetTraceLogCallback: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    SetLoadFileDataCallback: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    SetSaveFileDataCallback: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    SetLoadFileTextCallback: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    SetSaveFileTextCallback: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    LoadFileData: {
        args: [FFIType.cstring, FFIType.ptr],
        returns: FFIType.ptr,
    },
    UnloadFileData: {
        args: [FFIType.u8],
        returns: FFIType.void,
    },
    SaveFileData: {
        args: [FFIType.cstring, FFIType.ptr, FFIType.i32],
        returns: FFIType.bool,
    },
    ExportDataAsCode: {
        args: [FFIType.u8, FFIType.i32, FFIType.cstring],
        returns: FFIType.bool,
    },
    LoadFileText: {
        args: [FFIType.cstring],
        returns: FFIType.ptr,
    },
    UnloadFileText: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    SaveFileText: {
        args: [FFIType.cstring, FFIType.ptr],
        returns: FFIType.bool,
    },
    FileExists: {
        args: [FFIType.cstring],
        returns: FFIType.bool,
    },
    DirectoryExists: {
        args: [FFIType.cstring],
        returns: FFIType.bool,
    },
    IsFileExtension: {
        args: [FFIType.cstring, FFIType.cstring],
        returns: FFIType.bool,
    },
    GetFileLength: {
        args: [FFIType.cstring],
        returns: FFIType.i32,
    },
    GetFileExtension: {
        args: [FFIType.cstring],
        returns: FFIType.cstring,
    },
    GetFileName: {
        args: [FFIType.cstring],
        returns: FFIType.cstring,
    },
    GetFileNameWithoutExt: {
        args: [FFIType.cstring],
        returns: FFIType.cstring,
    },
    GetDirectoryPath: {
        args: [FFIType.cstring],
        returns: FFIType.cstring,
    },
    GetPrevDirectoryPath: {
        args: [FFIType.cstring],
        returns: FFIType.cstring,
    },
    GetWorkingDirectory: {
        args: [],
        returns: FFIType.cstring,
    },
    GetApplicationDirectory: {
        args: [],
        returns: FFIType.cstring,
    },
    MakeDirectory: {
        args: [FFIType.cstring],
        returns: FFIType.i32,
    },
    ChangeDirectory: {
        args: [FFIType.cstring],
        returns: FFIType.bool,
    },
    IsPathFile: {
        args: [FFIType.cstring],
        returns: FFIType.bool,
    },
    IsFileNameValid: {
        args: [FFIType.cstring],
        returns: FFIType.bool,
    },
    LoadDirectoryFiles: {
        args: [FFIType.cstring],
        returns: FFIType.ptr,
    },
    LoadDirectoryFilesEx: {
        args: [FFIType.cstring, FFIType.cstring, FFIType.bool],
        returns: FFIType.ptr,
    },
    UnloadDirectoryFiles: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    IsFileDropped: {
        args: [],
        returns: FFIType.bool,
    },
    UnloadDroppedFiles: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    GetFileModTime: {
        args: [FFIType.cstring],
        returns: FFIType.ptr,
    },
    CompressData: {
        args: [FFIType.u8, FFIType.i32, FFIType.ptr],
        returns: FFIType.ptr,
    },
    DecompressData: {
        args: [FFIType.u8, FFIType.i32, FFIType.ptr],
        returns: FFIType.ptr,
    },
    EncodeDataBase64: {
        args: [FFIType.u8, FFIType.i32, FFIType.ptr],
        returns: FFIType.ptr,
    },
    DecodeDataBase64: {
        args: [FFIType.u8, FFIType.ptr],
        returns: FFIType.ptr,
    },
    ComputeCRC32: {
        args: [FFIType.u8, FFIType.i32],
        returns: FFIType.i32,
    },
    ComputeMD5: {
        args: [FFIType.u8, FFIType.i32],
        returns: FFIType.ptr,
    },
    ComputeSHA1: {
        args: [FFIType.u8, FFIType.i32],
        returns: FFIType.ptr,
    },
    LoadAutomationEventList: {
        args: [FFIType.cstring],
        returns: FFIType.ptr,
    },
    UnloadAutomationEventList: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ExportAutomationEventList: {
        args: [FFIType.ptr, FFIType.cstring],
        returns: FFIType.bool,
    },
    SetAutomationEventList: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    SetAutomationEventBaseFrame: {
        args: [FFIType.i32],
        returns: FFIType.void,
    },
    StartAutomationEventRecording: {
        args: [],
        returns: FFIType.void,
    },
    StopAutomationEventRecording: {
        args: [],
        returns: FFIType.void,
    },
    PlayAutomationEvent: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    IsKeyPressed: {
        args: [FFIType.i32],
        returns: FFIType.bool,
    },
    IsKeyPressedRepeat: {
        args: [FFIType.i32],
        returns: FFIType.bool,
    },
    IsKeyDown: {
        args: [FFIType.i32],
        returns: FFIType.bool,
    },
    IsKeyReleased: {
        args: [FFIType.i32],
        returns: FFIType.bool,
    },
    IsKeyUp: {
        args: [FFIType.i32],
        returns: FFIType.bool,
    },
    GetKeyPressed: {
        args: [],
        returns: FFIType.i32,
    },
    GetCharPressed: {
        args: [],
        returns: FFIType.i32,
    },
    GetKeyName: {
        args: [FFIType.i32],
        returns: FFIType.cstring,
    },
    SetExitKey: {
        args: [FFIType.i32],
        returns: FFIType.void,
    },
    IsGamepadAvailable: {
        args: [FFIType.i32],
        returns: FFIType.bool,
    },
    GetGamepadName: {
        args: [FFIType.i32],
        returns: FFIType.cstring,
    },
    IsGamepadButtonPressed: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.bool,
    },
    IsGamepadButtonDown: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.bool,
    },
    IsGamepadButtonReleased: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.bool,
    },
    IsGamepadButtonUp: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.bool,
    },
    GetGamepadButtonPressed: {
        args: [],
        returns: FFIType.i32,
    },
    GetGamepadAxisCount: {
        args: [FFIType.i32],
        returns: FFIType.i32,
    },
    GetGamepadAxisMovement: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.f32,
    },
    SetGamepadMappings: {
        args: [FFIType.cstring],
        returns: FFIType.i32,
    },
    SetGamepadVibration: {
        args: [FFIType.i32, FFIType.f32, FFIType.f32, FFIType.f32],
        returns: FFIType.void,
    },
    IsMouseButtonPressed: {
        args: [FFIType.i32],
        returns: FFIType.bool,
    },
    IsMouseButtonDown: {
        args: [FFIType.i32],
        returns: FFIType.bool,
    },
    IsMouseButtonReleased: {
        args: [FFIType.i32],
        returns: FFIType.bool,
    },
    IsMouseButtonUp: {
        args: [FFIType.i32],
        returns: FFIType.bool,
    },
    GetMouseX: {
        args: [],
        returns: FFIType.i32,
    },
    GetMouseY: {
        args: [],
        returns: FFIType.i32,
    },
    SetMousePosition: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    SetMouseOffset: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    SetMouseScale: {
        args: [FFIType.f32, FFIType.f32],
        returns: FFIType.void,
    },
    SetMouseCursor: {
        args: [FFIType.i32],
        returns: FFIType.void,
    },
    GetTouchX: {
        args: [],
        returns: FFIType.i32,
    },
    GetTouchY: {
        args: [],
        returns: FFIType.i32,
    },
    GetTouchPosition: {
        args: [FFIType.i32],
        returns: FFIType.ptr,
    },
    GetTouchPointId: {
        args: [FFIType.i32],
        returns: FFIType.i32,
    },
    GetTouchPointCount: {
        args: [],
        returns: FFIType.i32,
    },
    SetGesturesEnabled: {
        args: [FFIType.u32],
        returns: FFIType.void,
    },
    IsGestureDetected: {
        args: [FFIType.u32],
        returns: FFIType.bool,
    },
    GetGestureDetected: {
        args: [],
        returns: FFIType.i32,
    },
    UpdateCamera: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    UpdateCameraPro: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    SetShapesTexture: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawPixel: {
        args: [FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawPixelV: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawLine: {
        args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawLineV: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawLineEx: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawLineStrip: {
        args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawLineBezier: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCircle: {
        args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCircleSector: {
        args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCircleSectorLines: {
        args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCircleGradient: {
        args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCircleV: {
        args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCircleLines: {
        args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCircleLinesV: {
        args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawEllipse: {
        args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawEllipseLines: {
        args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRing: {
        args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRingLines: {
        args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRectangle: {
        args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRectangleV: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRectangleRec: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRectanglePro: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRectangleGradientV: {
        args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRectangleGradientH: {
        args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRectangleGradientEx: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRectangleLines: {
        args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRectangleLinesEx: {
        args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRectangleRounded: {
        args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRectangleRoundedLines: {
        args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRectangleRoundedLinesEx: {
        args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTriangle: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTriangleLines: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTriangleFan: {
        args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTriangleStrip: {
        args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawPoly: {
        args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawPolyLines: {
        args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawPolyLinesEx: {
        args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawSplineLinear: {
        args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawSplineBasis: {
        args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawSplineCatmullRom: {
        args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawSplineBezierQuadratic: {
        args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawSplineBezierCubic: {
        args: [FFIType.ptr, FFIType.i32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawSplineSegmentLinear: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawSplineSegmentBasis: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawSplineSegmentCatmullRom: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawSplineSegmentBezierQuadratic: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawSplineSegmentBezierCubic: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    GetSplinePointLinear: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32],
        returns: FFIType.ptr,
    },
    GetSplinePointBasis: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32],
        returns: FFIType.ptr,
    },
    GetSplinePointCatmullRom: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32],
        returns: FFIType.ptr,
    },
    GetSplinePointBezierQuad: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32],
        returns: FFIType.ptr,
    },
    GetSplinePointBezierCubic: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32],
        returns: FFIType.ptr,
    },
    CheckCollisionRecs: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.bool,
    },
    CheckCollisionCircles: {
        args: [FFIType.ptr, FFIType.f32, FFIType.ptr, FFIType.f32],
        returns: FFIType.bool,
    },
    CheckCollisionCircleRec: {
        args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.bool,
    },
    CheckCollisionCircleLine: {
        args: [FFIType.ptr, FFIType.f32, FFIType.ptr, FFIType.ptr],
        returns: FFIType.bool,
    },
    CheckCollisionPointRec: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.bool,
    },
    CheckCollisionPointCircle: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32],
        returns: FFIType.bool,
    },
    CheckCollisionPointTriangle: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.bool,
    },
    CheckCollisionPointLine: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i32],
        returns: FFIType.bool,
    },
    CheckCollisionPointPoly: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
        returns: FFIType.bool,
    },
    CheckCollisionLines: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.bool,
    },
    GetCollisionRec: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    LoadImage: {
        args: [FFIType.cstring],
        returns: FFIType.ptr,
    },
    LoadImageRaw: {
        args: [FFIType.cstring, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    LoadImageAnim: {
        args: [FFIType.cstring, FFIType.ptr],
        returns: FFIType.ptr,
    },
    LoadImageAnimFromMemory: {
        args: [FFIType.cstring, FFIType.u8, FFIType.i32, FFIType.ptr],
        returns: FFIType.ptr,
    },
    LoadImageFromMemory: {
        args: [FFIType.cstring, FFIType.u8, FFIType.i32],
        returns: FFIType.ptr,
    },
    LoadImageFromTexture: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    IsImageValid: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    UnloadImage: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ExportImage: {
        args: [FFIType.ptr, FFIType.cstring],
        returns: FFIType.bool,
    },
    ExportImageToMemory: {
        args: [FFIType.ptr, FFIType.cstring, FFIType.ptr],
        returns: FFIType.ptr,
    },
    ExportImageAsCode: {
        args: [FFIType.ptr, FFIType.cstring],
        returns: FFIType.bool,
    },
    GenImageColor: {
        args: [FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.ptr,
    },
    GenImageGradientLinear: {
        args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    GenImageGradientRadial: {
        args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    GenImageGradientSquare: {
        args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    GenImageChecked: {
        args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    GenImageWhiteNoise: {
        args: [FFIType.i32, FFIType.i32, FFIType.f32],
        returns: FFIType.ptr,
    },
    GenImagePerlinNoise: {
        args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.f32],
        returns: FFIType.ptr,
    },
    GenImageCellular: {
        args: [FFIType.i32, FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    GenImageText: {
        args: [FFIType.i32, FFIType.i32, FFIType.cstring],
        returns: FFIType.ptr,
    },
    ImageCopy: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    ImageFromImage: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    ImageFromChannel: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.ptr,
    },
    ImageText: {
        args: [FFIType.cstring, FFIType.i32, FFIType.ptr],
        returns: FFIType.ptr,
    },
    ImageTextEx: {
        args: [FFIType.ptr, FFIType.cstring, FFIType.f32, FFIType.f32, FFIType.ptr],
        returns: FFIType.ptr,
    },
    ImageFormat: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    ImageToPOT: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageCrop: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageAlphaCrop: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    ImageAlphaClear: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    ImageAlphaMask: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageAlphaPremultiply: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ImageBlurGaussian: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    ImageKernelConvolution: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    ImageResize: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    ImageResizeNN: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    ImageResizeCanvas: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageMipmaps: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDither: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    ImageFlipVertical: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ImageFlipHorizontal: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ImageRotate: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    ImageRotateCW: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ImageRotateCCW: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ImageColorTint: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageColorInvert: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ImageColorGrayscale: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ImageColorContrast: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    ImageColorBrightness: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    ImageColorReplace: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    LoadImageColors: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    LoadImagePalette: {
        args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.ptr,
    },
    UnloadImageColors: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    UnloadImagePalette: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    GetImageAlphaBorder: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.ptr,
    },
    GetImageColor: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    ImageClearBackground: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawPixel: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawPixelV: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawLine: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawLineV: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawLineEx: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawCircle: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawCircleV: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawCircleLines: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawCircleLinesV: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawRectangle: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawRectangleV: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawRectangleRec: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawRectangleLines: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawTriangle: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawTriangleEx: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawTriangleLines: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawTriangleFan: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawTriangleStrip: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDraw: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawText: {
        args: [FFIType.ptr, FFIType.cstring, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    ImageDrawTextEx: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.cstring, FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    LoadTexture: {
        args: [FFIType.cstring],
        returns: FFIType.ptr,
    },
    LoadTextureFromImage: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    LoadTextureCubemap: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.ptr,
    },
    LoadRenderTexture: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    IsTextureValid: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    UnloadTexture: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    IsRenderTextureValid: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    UnloadRenderTexture: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    UpdateTexture: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    UpdateTextureRec: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    GenTextureMipmaps: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    SetTextureFilter: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    SetTextureWrap: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    DrawTexture: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTextureV: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTextureEx: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTextureRec: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTexturePro: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTextureNPatch: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    ColorIsEqual: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.bool,
    },
    Fade: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.ptr,
    },
    ColorToInt: {
        args: [FFIType.ptr],
        returns: FFIType.i32,
    },
    ColorNormalize: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    ColorFromNormalized: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    ColorToHSV: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    ColorFromHSV: {
        args: [FFIType.f32, FFIType.f32, FFIType.f32],
        returns: FFIType.ptr,
    },
    ColorTint: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    ColorBrightness: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.ptr,
    },
    ColorContrast: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.ptr,
    },
    ColorAlpha: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.ptr,
    },
    ColorAlphaBlend: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    ColorLerp: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32],
        returns: FFIType.ptr,
    },
    GetColor: {
        args: [FFIType.u32],
        returns: FFIType.ptr,
    },
    GetPixelColor: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.ptr,
    },
    SetPixelColor: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    GetPixelDataSize: {
        args: [FFIType.i32, FFIType.i32, FFIType.i32],
        returns: FFIType.i32,
    },
    GetFontDefault: {
        args: [],
        returns: FFIType.ptr,
    },
    LoadFont: {
        args: [FFIType.cstring],
        returns: FFIType.ptr,
    },
    LoadFontEx: {
        args: [FFIType.cstring, FFIType.i32, FFIType.ptr, FFIType.i32],
        returns: FFIType.ptr,
    },
    LoadFontFromImage: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
        returns: FFIType.ptr,
    },
    LoadFontFromMemory: {
        args: [FFIType.cstring, FFIType.u8, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.i32],
        returns: FFIType.ptr,
    },
    IsFontValid: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    LoadFontData: {
        args: [FFIType.u8, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    GenImageFontAtlas: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    UnloadFontData: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    UnloadFont: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ExportFontAsCode: {
        args: [FFIType.ptr, FFIType.cstring],
        returns: FFIType.bool,
    },
    DrawFPS: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    DrawText: {
        args: [FFIType.cstring, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTextEx: {
        args: [FFIType.ptr, FFIType.cstring, FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTextPro: {
        args: [FFIType.ptr, FFIType.cstring, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTextCodepoint: {
        args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTextCodepoints: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    SetTextLineSpacing: {
        args: [FFIType.i32],
        returns: FFIType.void,
    },
    MeasureText: {
        args: [FFIType.cstring, FFIType.i32],
        returns: FFIType.i32,
    },
    MeasureTextEx: {
        args: [FFIType.ptr, FFIType.cstring, FFIType.f32, FFIType.f32],
        returns: FFIType.ptr,
    },
    GetGlyphIndex: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.i32,
    },
    GetGlyphInfo: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.ptr,
    },
    GetGlyphAtlasRec: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.ptr,
    },
    LoadUTF8: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.ptr,
    },
    UnloadUTF8: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    LoadCodepoints: {
        args: [FFIType.cstring, FFIType.ptr],
        returns: FFIType.ptr,
    },
    UnloadCodepoints: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    GetCodepointCount: {
        args: [FFIType.cstring],
        returns: FFIType.i32,
    },
    GetCodepoint: {
        args: [FFIType.cstring, FFIType.ptr],
        returns: FFIType.i32,
    },
    GetCodepointNext: {
        args: [FFIType.cstring, FFIType.ptr],
        returns: FFIType.i32,
    },
    GetCodepointPrevious: {
        args: [FFIType.cstring, FFIType.ptr],
        returns: FFIType.i32,
    },
    CodepointToUTF8: {
        args: [FFIType.i32, FFIType.ptr],
        returns: FFIType.cstring,
    },
    TextCopy: {
        args: [FFIType.ptr, FFIType.cstring],
        returns: FFIType.i32,
    },
    TextIsEqual: {
        args: [FFIType.cstring, FFIType.cstring],
        returns: FFIType.bool,
    },
    TextLength: {
        args: [FFIType.cstring],
        returns: FFIType.i32,
    },
    TextFormat: {
        args: [FFIType.cstring],
        returns: FFIType.cstring,
    },
    TextSubtext: {
        args: [FFIType.cstring, FFIType.i32, FFIType.i32],
        returns: FFIType.cstring,
    },
    TextReplace: {
        args: [FFIType.cstring, FFIType.cstring, FFIType.cstring],
        returns: FFIType.ptr,
    },
    TextInsert: {
        args: [FFIType.cstring, FFIType.cstring, FFIType.i32],
        returns: FFIType.ptr,
    },
    TextJoin: {
        args: [FFIType.cstring, FFIType.i32, FFIType.cstring],
        returns: FFIType.cstring,
    },
    TextSplit: {
        args: [FFIType.cstring, FFIType.i8, FFIType.ptr],
        returns: FFIType.ptr,
    },
    TextAppend: {
        args: [FFIType.ptr, FFIType.cstring, FFIType.ptr],
        returns: FFIType.void,
    },
    TextFindIndex: {
        args: [FFIType.cstring, FFIType.cstring],
        returns: FFIType.i32,
    },
    TextToUpper: {
        args: [FFIType.cstring],
        returns: FFIType.cstring,
    },
    TextToLower: {
        args: [FFIType.cstring],
        returns: FFIType.cstring,
    },
    TextToPascal: {
        args: [FFIType.cstring],
        returns: FFIType.cstring,
    },
    TextToSnake: {
        args: [FFIType.cstring],
        returns: FFIType.cstring,
    },
    TextToCamel: {
        args: [FFIType.cstring],
        returns: FFIType.cstring,
    },
    TextToInteger: {
        args: [FFIType.cstring],
        returns: FFIType.i32,
    },
    TextToFloat: {
        args: [FFIType.cstring],
        returns: FFIType.f32,
    },
    DrawLine3D: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawPoint3D: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCircle3D: {
        args: [FFIType.ptr, FFIType.f32, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTriangle3D: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawTriangleStrip3D: {
        args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCube: {
        args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCubeV: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCubeWires: {
        args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCubeWiresV: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawSphere: {
        args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawSphereEx: {
        args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawSphereWires: {
        args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCylinder: {
        args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCylinderEx: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCylinderWires: {
        args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCylinderWiresEx: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCapsule: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawCapsuleWires: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawPlane: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawRay: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawGrid: {
        args: [FFIType.i32, FFIType.f32],
        returns: FFIType.void,
    },
    LoadModel: {
        args: [FFIType.cstring],
        returns: FFIType.ptr,
    },
    LoadModelFromMesh: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    IsModelValid: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    UnloadModel: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    GetModelBoundingBox: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    DrawModel: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawModelEx: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawModelWires: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawModelWiresEx: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawModelPoints: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawModelPointsEx: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawBoundingBox: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawBillboard: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawBillboardRec: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawBillboardPro: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
        returns: FFIType.void,
    },
    UploadMesh: {
        args: [FFIType.ptr, FFIType.bool],
        returns: FFIType.void,
    },
    UpdateMeshBuffer: {
        args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    UnloadMesh: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    DrawMesh: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DrawMeshInstanced: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    GetMeshBoundingBox: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    GenMeshTangents: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ExportMesh: {
        args: [FFIType.ptr, FFIType.cstring],
        returns: FFIType.bool,
    },
    ExportMeshAsCode: {
        args: [FFIType.ptr, FFIType.cstring],
        returns: FFIType.bool,
    },
    GenMeshPoly: {
        args: [FFIType.i32, FFIType.f32],
        returns: FFIType.ptr,
    },
    GenMeshPlane: {
        args: [FFIType.f32, FFIType.f32, FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    GenMeshCube: {
        args: [FFIType.f32, FFIType.f32, FFIType.f32],
        returns: FFIType.ptr,
    },
    GenMeshSphere: {
        args: [FFIType.f32, FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    GenMeshHemiSphere: {
        args: [FFIType.f32, FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    GenMeshCylinder: {
        args: [FFIType.f32, FFIType.f32, FFIType.i32],
        returns: FFIType.ptr,
    },
    GenMeshCone: {
        args: [FFIType.f32, FFIType.f32, FFIType.i32],
        returns: FFIType.ptr,
    },
    GenMeshTorus: {
        args: [FFIType.f32, FFIType.f32, FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    GenMeshKnot: {
        args: [FFIType.f32, FFIType.f32, FFIType.i32, FFIType.i32],
        returns: FFIType.ptr,
    },
    GenMeshHeightmap: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    GenMeshCubicmap: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    LoadMaterials: {
        args: [FFIType.cstring, FFIType.ptr],
        returns: FFIType.ptr,
    },
    IsMaterialValid: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    UnloadMaterial: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    SetMaterialTexture: {
        args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
        returns: FFIType.void,
    },
    SetModelMeshMaterial: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    LoadModelAnimations: {
        args: [FFIType.cstring, FFIType.ptr],
        returns: FFIType.ptr,
    },
    UpdateModelAnimation: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    UpdateModelAnimationBones: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    UnloadModelAnimation: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    UnloadModelAnimations: {
        args: [FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    IsModelAnimationValid: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.bool,
    },
    CheckCollisionSpheres: {
        args: [FFIType.ptr, FFIType.f32, FFIType.ptr, FFIType.f32],
        returns: FFIType.bool,
    },
    CheckCollisionBoxes: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.bool,
    },
    CheckCollisionBoxSphere: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32],
        returns: FFIType.bool,
    },
    GetRayCollisionSphere: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.f32],
        returns: FFIType.ptr,
    },
    GetRayCollisionBox: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    GetRayCollisionMesh: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    GetRayCollisionTriangle: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    GetRayCollisionQuad: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
    },
    InitAudioDevice: {
        args: [],
        returns: FFIType.void,
    },
    CloseAudioDevice: {
        args: [],
        returns: FFIType.void,
    },
    IsAudioDeviceReady: {
        args: [],
        returns: FFIType.bool,
    },
    SetMasterVolume: {
        args: [FFIType.f32],
        returns: FFIType.void,
    },
    LoadWave: {
        args: [FFIType.cstring],
        returns: FFIType.ptr,
    },
    LoadWaveFromMemory: {
        args: [FFIType.cstring, FFIType.u8, FFIType.i32],
        returns: FFIType.ptr,
    },
    IsWaveValid: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    LoadSound: {
        args: [FFIType.cstring],
        returns: FFIType.ptr,
    },
    LoadSoundFromWave: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    LoadSoundAlias: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    IsSoundValid: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    UpdateSound: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    UnloadWave: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    UnloadSound: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    UnloadSoundAlias: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ExportWave: {
        args: [FFIType.ptr, FFIType.cstring],
        returns: FFIType.bool,
    },
    ExportWaveAsCode: {
        args: [FFIType.ptr, FFIType.cstring],
        returns: FFIType.bool,
    },
    PlaySound: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    StopSound: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    PauseSound: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ResumeSound: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    IsSoundPlaying: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    SetSoundVolume: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    SetSoundPitch: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    SetSoundPan: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    WaveCopy: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    WaveCrop: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    WaveFormat: {
        args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32],
        returns: FFIType.void,
    },
    LoadWaveSamples: {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
    },
    UnloadWaveSamples: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    LoadMusicStream: {
        args: [FFIType.cstring],
        returns: FFIType.ptr,
    },
    LoadMusicStreamFromMemory: {
        args: [FFIType.cstring, FFIType.u8, FFIType.i32],
        returns: FFIType.ptr,
    },
    IsMusicValid: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    UnloadMusicStream: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    PlayMusicStream: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    IsMusicStreamPlaying: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    UpdateMusicStream: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    StopMusicStream: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    PauseMusicStream: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ResumeMusicStream: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    SeekMusicStream: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    SetMusicVolume: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    SetMusicPitch: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    SetMusicPan: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    GetMusicTimeLength: {
        args: [FFIType.ptr],
        returns: FFIType.f32,
    },
    GetMusicTimePlayed: {
        args: [FFIType.ptr],
        returns: FFIType.f32,
    },
    LoadAudioStream: {
        args: [FFIType.u32, FFIType.u32, FFIType.u32],
        returns: FFIType.ptr,
    },
    IsAudioStreamValid: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    UnloadAudioStream: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    UpdateAudioStream: {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
        returns: FFIType.void,
    },
    IsAudioStreamProcessed: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    PlayAudioStream: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    PauseAudioStream: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    ResumeAudioStream: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    IsAudioStreamPlaying: {
        args: [FFIType.ptr],
        returns: FFIType.bool,
    },
    StopAudioStream: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    SetAudioStreamVolume: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    SetAudioStreamPitch: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    SetAudioStreamPan: {
        args: [FFIType.ptr, FFIType.f32],
        returns: FFIType.void,
    },
    SetAudioStreamBufferSizeDefault: {
        args: [FFIType.i32],
        returns: FFIType.void,
    },
    SetAudioStreamCallback: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    AttachAudioStreamProcessor: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    DetachAudioStreamProcessor: {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
    },
    AttachAudioMixedProcessor: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
    DetachAudioMixedProcessor: {
        args: [FFIType.ptr],
        returns: FFIType.void,
    },
});
