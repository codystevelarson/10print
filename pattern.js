class Pattern {
  constructor(w, h, size) {
    this.w = w;
    this.h = h;
    this.size = size;
    this.x = 0;
    this.y = 0;
    this.freq = 0.55;
  }

  display() {
    stroke(0, 255, 255);
    for (let r = 0; r < this.h; r++) {
      for (let c = 0; c < this.w; c++) {
        if (random(1) > this.freq) {
          line(this.x, this.y, this.x + this.size, this.y + this.size);
        } else {
          line(this.x, this.y + this.size, this.x + this.size, this.y);
        }
        this.x += this.size;
      }
      this.x = 0;
      this.y += this.size;
    }
    this.y = 0;
  }
}
