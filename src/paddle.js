//import { createContext } from "vm";

export default class Paddle {
  constructor(game) {
    this.screenWidth = game.screenWidth;

    this.screenHeight = game.screenHeight;

    this.width = 150;

    this.height = 20;

    this.maxSpeed = 7;

    this.speed = 0;

    this.leftEdge = 0;

    this.initPos();
  }

  rightEdge() {
    return this.screenWidth - this.width;
  }

  initPos() {
    this.position = {
      x: this.screenWidth / 2 - this.width / 2,
      y: this.screenHeight - this.height - 10
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = +this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "orange";

    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    this.position.x += this.speed;

    if (this.position.x <= this.leftEdge) this.position.x = 0;

    if (this.position.x >= this.rightEdge()) this.position.x = this.rightEdge();
  }
}
