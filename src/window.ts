import {raylib} from "./bindings.ts";
import {ptr} from "bun:ffi";
import {Color} from "./color.ts";
import {Vec2} from "./vectors.ts";
import {cstr} from "./index.ts";
import {ConfigFlags} from "./enums.ts";

export class Window {
    constructor(title: string, width: number, height: number, flags?: ConfigFlags[]) {
        for (const flag of flags || []) {
            raylib.SetConfigFlags(flag);
        }
        raylib.InitWindow(width, height, ptr(Buffer.from(title)));
    }

    shouldClose() {
        return raylib.WindowShouldClose();
    }

    mainLoop(cb: () => void) {
        while (!this.shouldClose()) {
            raylib.BeginDrawing();
            cb();
            raylib.EndDrawing();
        }
    }

    setTargetFPS(fps: number) {
        raylib.SetTargetFPS(fps);
    }

    clearBackground(color: Color) {
        // @ts-ignore
        raylib.ClearBackground(color.rgb);
    }

    /**
     * Draw text (using default font)
     *
     * @note fontSize work like in any drawing program but if fontSize is lower than font-base-size, then font-base-size is used
     * @note chars spacing is proportional to fontSize
     *
     * @param text - Text to draw
     * @param position - Position where text should be drawn. Expects a Vec2 or a tuple of two numbers
     * @param fontSize - Font size in pixels
     * @param color - Text color
     */
    drawText(text: string, position: Vec2, fontSize: number, color: Color): void;
    drawText(text: string, position: [number, number], fontSize: number, color: Color): void;
    drawText(a: string, b: Vec2 | [number, number], c: number, d: Color) {
        let text = cstr(a);
        if (b instanceof Vec2) {
            raylib.DrawText(text, b.x, b.y, c, d.rgb);
        } else {
            raylib.DrawText(text, b[0], b[1], c, d.rgb);
        }
    }

    /**
     * Close window and unload OpenGL context
     */
    close() {
        raylib.CloseWindow();
    }

    /**
     * Set window state: maximized, if resizable
     */
    maximize() {
        raylib.MaximizeWindow();
    }

    /**
     * Set window state: minimized, if resizable
     */
    minimize() {
        raylib.MinimizeWindow();
    }

    /**
     * Set window state: not minimized/maximized
     */
    restore() {
        raylib.RestoreWindow();
    }

    /**
     * Toggle window state: fullscreen/windowed, resizes monitor to match window resolution
     */
    toggleFullscreen() {
        raylib.ToggleFullscreen();
    }

    /**
     * Toggle window state: borderless windowed, resizes window to match monitor resolution
     */
    toggleBorderlessWindowed() {
        raylib.ToggleBorderlessWindowed();
    }

    /**
     * Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE)
     */
    setMinSize(width: number, height: number) {
        raylib.SetWindowMinSize(width, height);
    }

    /**
     * Set window maximum dimensions (for FLAG_WINDOW_RESIZABLE)
     */
    setMaxSize(width: number, height: number) {
        raylib.SetWindowMaxSize(width, height);
    }

    /**
     * Set window dimensions
     */
    setSize(width: number, height: number) {
        raylib.SetWindowSize(width, height);
    }

    /**
     * Get current screen width
     */
    getScreenWidth() {
        return raylib.GetScreenWidth();
    }

    /**
     * Get current screen height
     */
    getScreenHeight() {
        return raylib.GetScreenHeight();
    }

    /**
     * Get current render width (it considers HiDPI)
     */
    getRenderWidth() {
        return raylib.GetRenderWidth();
    }

    /**
     * Get current render height (it considers HiDPI)
     */
    getRenderHeight() {
        return raylib.GetRenderHeight();
    }

    /**
     * Check if window has been initialized successfully
     */
    isReady() {
        return raylib.IsWindowReady();
    }

    /**
     * Check if window is currently fullscreen
     */
    isFullscreen() {
        return raylib.IsWindowFullscreen();
    }

    /**
     * Check if window is currently hidden
     */
    isHidden() {
        return raylib.IsWindowHidden();
    }

    /**
     * Check if window is currently minimized
     */
    isMinimized() {
        return raylib.IsWindowMinimized();
    }

    /**
     * Check if window is currently maximized
     */
    isMaximized() {
        return raylib.IsWindowMaximized();
    }

    /**
     * Check if window is currently focused
     */
    isFocused() {
        return raylib.IsWindowFocused();
    }

    /**
     * Check if window has been resized last frame
     */
    isResized() {
        return raylib.IsWindowResized();
    }
}
