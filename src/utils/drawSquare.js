import { mouse, left, up, right, down, Point, Button } from "@nut-tree/nut-js";

export const drawSquare = async (value) => {
    const target = new Point(500, 980);
    await mouse.move(target);
    await mouse.pressButton(Button.LEFT);
    await mouse.move(left(Number(value)));
    await mouse.move(up(Number(value)));
    await mouse.move(right(Number(value)));
    await mouse.move(down(Number(value)))
    await mouse.releaseButton(Button.LEFT);
}