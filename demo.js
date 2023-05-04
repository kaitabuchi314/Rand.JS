let randjs;

function setup() {
    createCanvas(400, 400);

    randjs = new rand();
    background(map(randjs.pseudoSeeded(353636)*100, 0, 30, 0, 255)*10);

}

function draw() {
}
