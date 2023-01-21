import { mouse, left, right, up, down } from "@nut-tree/nut-js";
import { getPositionMouse } from "./getPositionMouse";
import { drawSquare } from "./drawSquare";
import { drawCircle } from "./drawCircle"
import { printScreen } from "./printScreen";

export const ACTIONS = {
    mouse_position: (ws) => getPositionMouse(ws),
    draw_square: (_, value1) => drawSquare(value1),
    draw_circle: (_, value1) => drawCircle(value1),
    mouse_left: (_, value1) => mouse.move(left(Number(value1))),
    mouse_right: (_, value1) => mouse.move(right(Number(value1))),
    mouse_up: (_, value1) => mouse.move(up(Number(value1))),
    mouse_down: (_, value1) => mouse.move(down(Number(value1))),
    prnt_scrn: (ws) => printScreen(ws)
}