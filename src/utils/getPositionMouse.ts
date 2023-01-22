import { mouse } from "@nut-tree/nut-js";

export const getPositionMouse = async () => {
    const {x, y} = await mouse.getPosition();
    
    return `${x},${y}`
}