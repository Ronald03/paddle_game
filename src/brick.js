import { detectCollision } from "./collisionDetection.js"

export default class Brick {
  constructor(game, position) {
    this.game = game;
    this.brick = document.getElementById("brickImg");

    this.width = 60;
    this.height = 24;

    this.position = position;
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.brick,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
