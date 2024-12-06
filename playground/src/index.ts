import {Window} from "../../src/window.ts";
import {Color} from "../../src/color.ts";

const win = new Window("Hello, World!", 800, 600);

win.setTargetFPS(60);

win.mainLoop(() => {
    win.clearBackground(Color.BEIGE);
    win.drawText(`Current size: ${win.getScreenWidth()} x ${win.getScreenHeight()} ${win.isFullscreen()}`, [10, 10], 20, Color.BLACK);
});

win.close();
