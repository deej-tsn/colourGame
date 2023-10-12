import { deltaE, rgb2lab } from "./rgb-lab/color";

export function randomColour(){
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

export function toRGBArray(colour : string){
    let r = parseInt(colour[1] + colour[2], 16);
    let g = parseInt(colour[3] + colour[4], 16);
    let b = parseInt(colour[5] + colour[6], 16);

    return [r,g,b];
}


export function distanceAway(bgColour : string, chosenColour:string) {
    const lab1 = rgb2lab(toRGBArray(bgColour));
    const lab2 = rgb2lab(toRGBArray(chosenColour));

    return deltaE(lab1, lab2).toFixed(2);

}
