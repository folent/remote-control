import { mouse } from "@nut-tree/nut-js";

export const getPositionMouse = async (ws) => {
    const {x, y} = await mouse.getPosition();
    ws.send(`mouse_position ${x},${y}`)
}