import { detectCollision } from "./collisionDetection.js";

export default class Powerup {
  constructor(brick, game, pwrup) {

    this.game = game;

    this.position = brick.position;

    this.size = 30;
    
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
          let x = this.ball.speed.x;
          let y = this.ball.speed.y;
          if( x<0 && y>0) this.ball.speed = {x: -8, y: 8};
          if( x>0 && y<0) this.ball.speed = {x: 8, y: -8};
          if( x<0 && y<0) this.ball.speed = {x: -8, y: -8};
          if( x>0 && y>0) this.ball.speed = {x: 8, y: 8};
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

    this.markedForDeletion = false;
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

    if (detectCollision(this, this.paddle)) {

      this.power[this.up].feature();

      this.markedForDeletion = true;

    }else if (this.position.y > this.game.screenHeight){

      this.markedForDeletion = true;
    }

  }
}
