import {raylib} from "./bindings.ts";
import {ptr} from "bun:ffi";
import {Color} from "./color.ts";
import {Vec2} from "./vectors.ts";
import {cstr} from "./index.ts";

export class Window {
    constructor(title: string, width: number, height: number) {
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
}
