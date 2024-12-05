import {raylib} from "./bindings.ts";
import {ptr} from "bun:ffi";
import {Color} from "./color.ts";
import {Vec2} from "./vectors.ts";
import {cstr} from "./index.ts";

export class Window {
    constructor(title: string, width: number, height: number) {
        raylib.InitWindow(width, height, ptr(Buffer.from(title)));
    }

    mainLoop(cb: () => void) {
        while (!raylib.WindowShouldClose()) {
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

    close() {
        raylib.CloseWindow();
    }
}
