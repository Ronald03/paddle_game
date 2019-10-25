//import { detectCollision } from "./collisionDetection.js";
//import Brick from "./brick.js";

export default class Powerup {
  constructor(brick, game) {
    this.speedBall = document.getElementById("speedBall");
    this.position = brick.position;
    this.size = 30;
    this.brick = brick;

    this.paddle = game.paddle;
    this.markedForDeletion = false;
  }

  draw(ctx) {
    ctx.drawImage(
      this.speedBall,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltatime) {
    if (this.brick.markedForDeletion) {
      this.position.y += 1.5;
    }

    if (this.position.y + 20 >= this.paddle.position.y) {
      this.markedForDeletion = true;
    }
  }
}
