import { mouse, Point } from "@nut-tree/nut-js";

export const drawCircle = async (radius: number) => {
    const {x, y} = await mouse.getPosition();
    const coords: Point[] = [];
    const startPosition = new Point(x + radius, y);
    const steps = radius * 5;
    
    for (let i = 0; i < steps; i++) {
        const coordX = (x + radius * Math.cos(2 * Math.PI * i / steps));
        const coordY = (y + radius * Math.sin(2 * Math.PI * i / steps));
        coords.push(new Point(coordX, coordY))
    }
    
    await mouse.move([startPosition]);
    await mouse.drag(coords);
}