//import { detectCollision } from "./collisionDetection.js";
//import Brick from "./brick.js";

export default class Powerup {
  constructor(brick, game, pwrup) {
    //this.speedBall = this.power.image;//document.getElementById("speedBall");
    this.position = brick.position;
    this.size = 30;
    this.markedForDeletion = false;

    this.brick = brick;

    this.paddle = game.paddle;
    this.ball = game.ball;

    this.up = pwrup;

    this.power = [
      {
        image: document.getElementById("speedBall"),
        name: "speedBall",
        paddle: this.paddle,
        ball: this.ball,
        feature: function() {
          this.ball.speed = { x: 5, y: -5 };
        }
      },
      {
        image: document.getElementById("smallball"),
        name: "smallBall",
        paddle: this.paddle,
        ball: this.ball,
        feature: function() {
          this.ball.size = 10;
        }
      },
      {
        image: document.getElementById("bigpaddle"),
        name: "bigpaddle",
        paddle: this.paddle,
        ball: this.ball,
        feature: function() {
          this.paddle.width = 200;
        }
      },
      {
        image: document.getElementById("smallpaddle"),
        name: "smallpaddle",
        paddle: this.paddle,
        ball: this.ball,
        feature: function() {
          this.paddle.width = 100;
        }
      }
    ];
  }

  draw(ctx) {
    ctx.drawImage(
      this.power[this.up].image,
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
      this.power[this.up].feature();
      this.markedForDeletion = true;
    }
  }
}
