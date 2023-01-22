import { mouse, left, right, up, down } from "@nut-tree/nut-js";
import { getPositionMouse } from "./getPositionMouse.js";
import { drawSquare } from "./drawSquare.js";
import { drawCircle } from "./drawCircle.js"
import { printScreen } from "./printScreen.js";
import { drawRectangular } from "./drawRectangular.js";
import internal from "stream";


export const ACTIONS: { [key: string]: any } = {
    mouse_position: getPositionMouse,
    draw_square: (value1: number) => drawSquare(value1),
    draw_circle: (value1: number) => drawCircle(value1),
    draw_rectangle: (value1: number, value2: number) => drawRectangular(value1, value2),
    mouse_left: (value1: number) => mouse.move(left(value1)),
    mouse_right: (value1: number) => mouse.move(right(value1)),
    mouse_up: (value1: number) => mouse.move(up(value1)),
    mouse_down: (value1: number) => mouse.move(down(value1)),
    prnt_scrn: printScreen
}