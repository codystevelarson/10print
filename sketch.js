let stop = false,
  size = 20,
  cols = 0,
  rows = 0,
  p,
  fr = 69;

function setup() {
  let bg = document.getElementById("APP");

  let can = createCanvas(bg.offsetWidth, bg.offsetHeight);
  can.parent("APP");

  background(0);
  cols = width / size;
  rows = height / size;
  p = new Pattern(cols, rows, size);
  frameRate(fr);
}

function draw() {
  if (stop) {
    return;
  }
  background(0);
  p.display();
}

function mousePressed() {
  stop = true;
}

function mouseReleased() {
  stop = false;
}
