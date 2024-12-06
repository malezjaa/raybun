import {Window} from "../../src/window.ts";
import {Color} from "../../src/color.ts";
import {ConfigFlags} from "../../src";

let screenWidth = 800;
let screenHeight = 600;

const win = new Window("Hello, World!", screenWidth, screenHeight, [ConfigFlags.FLAG_WINDOW_RESIZABLE]);

win.setTargetFPS(60);

win.mainLoop(() => {
    if (win.isResized() && !win.isFullscreen()) {
        screenWidth = win.getScreenWidth();
        screenHeight = win.getScreenHeight();
    }

    win.clearBackground(Color.BEIGE);
    win.drawText(`Current size: ${win.getScreenWidth()} x ${win.getScreenHeight()} ${win.isFullscreen()}`, [10, 10], 20, Color.BLACK);
});

win.close();
