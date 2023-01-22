import { mouse, left, up, right, down, Button } from "@nut-tree/nut-js";

export const drawRectangular = async (value1: number, value2: number) => {
    await mouse.pressButton(Button.LEFT);
    await mouse.move(left(value1));
    await mouse.move(up(value2));
    await mouse.move(right(value1));
    await mouse.move(down(value2))
    await mouse.releaseButton(Button.LEFT);
}