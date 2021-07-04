const lines = [];
const paleta = [
    { r: 188, g: 71, b: 73, a: 0 },
    { r: 28, g: 48, b: 56, a: 0 },
    { r: 28, g: 48, b: 56, a: 0 },
    { r: 28, g: 48, b: 56, a: 0 },
    { r: 20, g: 35, b: 41, a: 0 },
    { r: 20, g: 35, b: 41, a: 0 },
]

function setup() {
    let s = document.getElementById("anim").offsetWidth;
    createCanvas(s, windowHeight).parent("anim");
    for (let i = 0; i < 60; i++) {
        lines[i] = {
            x1: random(0, width),
            y1: random(0, height),
            x2: random(0, width),
            y2: random(50, height),
            ...random(paleta)
        };
    }
}


function draw() {
    background('#0f1a1faf');
    strokeWeight(2);
    for (let i = 0; i < lines.length; i++) {


        lines[i].y1 += sin(radians(frameCount + (i * 100))) * 0.3;
        lines[i].y2 -= sin(radians(frameCount + (i * 100))) * 0.3;
        lines[i].x1 += sin(radians(frameCount + (i * 100))) * 0.3;
        lines[i].x2 -= sin(radians(frameCount + (i * 100))) * 0.3;

        if (width < 700) {
            stroke(lines[i].r, lines[i].g, lines[i].b, 50);
            line(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);
        } else

        if ((mouseY > lines[i].y1 - 40 && mouseY < lines[i].y1 + 40 && mouseY > 50)) {

            if (lines[i].a <= 135) {
                lines[i].a = lines[i].a + 15;
            }
            stroke(lines[i].r, lines[i].g, lines[i].b, lines[i].a);
            line(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);

        } else {
            if (lines[i].a >= 40) {
                lines[i].a = lines[i].a - 1;
            }
            stroke(lines[i].r, lines[i].g, lines[i].b, lines[i].a);
            line(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);
        }
    }
}


function windowResized() {
    sketchWidth = document.getElementById("anim").offsetWidth,
        resizeCanvas(sketchWidth, windowHeight)
    for (let i = 0; i < 60; i++) {
        lines[i] = {
            x1: random(0, width),
            y1: random(0, height),
            x2: random(0, width),
            y2: random(50, height),
            ...random(paleta)
        };
    }
}