export default class Ball {
  constructor(game) {
    this.ball = document.getElementById("ballImg");

    this.size = 15;

    this.screenWidth = game.screenWidth;
    this.screenHeight = game.screenHeight;

    this.game = game;

    this.position = {
      x: this.screenWidth / 2 - this.size / 2,
      y: this.screenHeight - 45
    };

    this.speed = { x: 4, y: -3 };
  }

  draw(ctx) {
    ctx.drawImage(
      this.ball,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;

    this.position.y += this.speed.y;

    //Collision wall left or right
    if (this.position.x < 0 || this.position.x + this.size > this.screenWidth)
      this.speed.x = -this.speed.x;

    //Collision wall up or down
    if (this.position.y < 0 || this.position.y + this.size > this.screenHeight)
      this.speed.y = -this.speed.y;

    //Collision with Paddle
    let bottomOfBall = this.position.y + this.size;

    let topOfPaddle = this.game.paddle.position.y;

    let leftSideOfPaddle = this.game.paddle.position.x;

    let rightSideOfPaddle =
      this.game.paddle.position.x + this.game.paddle.width;

    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x >= leftSideOfPaddle &&
      this.position.x + this.size <= rightSideOfPaddle
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
