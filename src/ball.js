import { detectCollision } from "./collisionDetection.js";

export default class Ball {
  constructor(game) {
    // Grab the ball image
    this.ball = document.getElementById("metalBall");

    //define the size of the ball
    this.size = 15;

    //Dimension of game area to identify the edges
    this.screenWidth = game.screenWidth;

    this.screenHeight = game.screenHeight;

    //Create an instance of the game class
    this.game = game;

    //Set the initial position of the ball
    this.reset();
  }

  rollBall() {
    this.speed = { x: 1, y: -1 };
  }

  reset() {
    //This defines the initial position of the ball and its speed
    this.game.paddle.initPos();
    this.position = {
      x:
        this.game.paddle.position.x +
        this.game.paddle.width / 2 -
        this.size / 2,
      y: this.screenHeight - 45
    };
    this.speed = { x: 0, y: -0 };
  }

  draw(ctx) {
    //Draw image of ball on the screen
    ctx.drawImage(
      this.ball,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    //Update the movements of the ball and detects collision with edges and paddle
    this.position.x += this.speed.x;

    this.position.y += this.speed.y;

    //Collision wall left or right
    if (this.position.x < 0 || this.position.x + this.size > this.screenWidth)
      this.speed.x = -this.speed.x;

    //Collision wall up
    if (this.position.y < 0) this.speed.y = -this.speed.y;

    //bottom of game
    if (this.position.y - this.size > this.screenHeight) {
      this.game.gameLives--;

      //reset ball to initial position
      this.reset();
      this.game.isGameInitiated = true;
    }
    //Detects collision with paddle
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
