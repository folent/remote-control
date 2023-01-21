import { mouse, Point, straightTo, Region, centerOf } from "@nut-tree/nut-js";

export const drawCircle = async (value) => {
    const target = new Point(500, 980);
    await mouse.setPosition(target);
    await mouse.drag(straightTo(centerOf(new Region(Number(value), Number(value), Number(value), Number(value)))));
}