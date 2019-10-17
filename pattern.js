class Pattern {
    constructor(cols, rows, size) {
        this.cols = cols;
        this.rows = rows;
        this.size = size;
        this.x = 0;
        this.y = 0;
    }

    display() {
        stroke(0);
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (random(1) > .5) {
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
