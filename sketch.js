let stop = false,
    size = 20,
    cols = 0,
    rows = 0,
    p;

function setup() {
    createCanvas(800, 800);
    background(255);
    cols = width / size;
    rows = height / size;
    p = new Pattern(cols, rows, size);
    frameRate(2);
}

function draw() {
    if (stop) {
        return;
    }
    background(255);
    p.display();
}

function mousePressed() {
    stop = true;
}

function mouseReleased() {
    stop = false;
}


