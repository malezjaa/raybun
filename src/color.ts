import {ptr} from "bun:ffi";

export class Color {
    public rgb: number;

    constructor(public r: number, public g: number, public b: number, public a: number) {
        this.rgb = ((r & 0xff) | ((g & 0xff) << 8) | ((b & 0xff) << 16) | ((a & 0xff) << 24)) >>> 0
    }

    public static readonly LIGHTGRAY = new Color(200, 200, 200, 255);
    public static readonly GRAY = new Color(130, 130, 130, 255);
    public static readonly DARKGRAY = new Color(80, 80, 80, 255);
    public static readonly YELLOW = new Color(253, 249, 0, 255);
    public static readonly GOLD = new Color(255, 203, 0, 255);
    public static readonly ORANGE = new Color(255, 161, 0, 255);
    public static readonly PINK = new Color(255, 109, 194, 255);
    public static readonly RED = new Color(230, 41, 55, 255);
    public static readonly MAROON = new Color(190, 33, 55, 255);
    public static readonly GREEN = new Color(0, 228, 48, 255);
    public static readonly LIME = new Color(0, 158, 47, 255);
    public static readonly DARKGREEN = new Color(0, 117, 44, 255);
    public static readonly SKYBLUE = new Color(102, 191, 255, 255);
    public static readonly BLUE = new Color(0, 121, 241, 255);
    public static readonly DARKBLUE = new Color(0, 82, 172, 255);
    public static readonly PURPLE = new Color(200, 122, 255, 255);
    public static readonly VIOLET = new Color(135, 60, 190, 255);
    public static readonly DARKPURPLE = new Color(112, 31, 126, 255);
    public static readonly BEIGE = new Color(211, 176, 131, 255);
    public static readonly BROWN = new Color(127, 106, 79, 255);
    public static readonly DARKBROWN = new Color(76, 63, 47, 255);
    public static readonly WHITE = new Color(255, 255, 255, 255);
    public static readonly BLACK = new Color(0, 0, 0, 255);
    public static readonly BLANK = new Color(0, 0, 0, 0);
    public static readonly MAGENTA = new Color(255, 0, 255, 255);
    public static readonly RAYWHITE = new Color(245, 245, 245, 255);
}
