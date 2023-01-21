import { mouse, Region, screen } from "@nut-tree/nut-js";
import Jimp from 'jimp';

export const printScreen = async (ws) => {
    const {x, y} = await mouse.getPosition();
    const region = new Region(x - 100, y - 100, 200, 200);
    const image = await screen.grabRegion(region)

    Jimp.read(image)
        .then(async img => {
            const base = await img.getBase64Async(Jimp.MIME_PNG);
            
            ws.send('prnt_scrn ' + base.split(',')[1])
        })
}