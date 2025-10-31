class Star {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.color = color("white");
    this.width = 10;
    this.initZ = this.z;
    this.speed = 5;
    this.previousZ = this.z;
  }

  update() {
    this.z = this.z - this.speed;
    if (this.z < 0) {
      this.z = this.initZ;
      this.previousZ = this.z;
    }
  }

  mapInterval(val, max) {
    // remap 'val' from 0->1 to 0->'max'
    // this makes the movement smoother when advancing tho the edge, edge = 'max'
    return val * max;
  }

  show() {
    let speedX = this.x / this.z; // exponentially increase speed
    let speedY = this.y / this.z;
    let newX = this.mapInterval(speedX, this.initZ);
    let newY = this.mapInterval(speedY, this.initZ);
    fill(this.color);
    noStroke();
    let newWidth = this.mapInterval(speedX, this.width);

    ellipse(newX, newY, newWidth, newWidth);

    // add tail effect
    let previousSpeedX = this.x / this.previousZ;
    let previousSpeedY = this.y / this.previousZ;
    let previousX = this.mapInterval(previousSpeedX, this.initZ);
    let previousY = this.mapInterval(previousSpeedY, this.initZ);

    stroke(255);
    line(newX, newY, previousX, previousY);
    this.previousZ = this.z;
  }
}
