import { mouse, Region, screen } from "@nut-tree/nut-js";
import Jimp from 'jimp';

export const printScreen = async () => {
    const {x, y} = await mouse.getPosition();
    const region = new Region(x - 100, y - 100, 200, 200);
    const image = await screen.grabRegion(region);
    const correctedColors = await image.toRGB();
    const img = new Jimp(correctedColors);

    return Jimp.read(img)
        .then(async img => {
            const base = await img.getBase64Async(Jimp.MIME_PNG);
            
            return base.split(',')[1]
        })
}