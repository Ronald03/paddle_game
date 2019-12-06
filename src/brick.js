import { detectCollision } from "./collisionDetection.js";
//import Powerup from "./powerUps.js";

export default class Brick {
  // Pass an instance of the game class to constructor
  constructor(game, position, brickColor) {
    this.brickList = [
      document.getElementById("purpleBrick"),
      document.getElementById("greenBrick")
    ];

    // Instance of game class
    this.game = game;

    //grab image of brick
    this.brick = this.brickList[brickColor];

    //define dimesion of bricks
    this.width = 60;
    this.height = 24;

    // get position from the parameter
    this.position = position;

    //Identify which brick should be deleted when ball hits it
    this.markedForDeletion = false;

    //value of brick
    this.points = 10;
  }

  //Update changes on the bricks
  update() {
    //check for collision with ball
    if (detectCollision(this.game.ball, this)) {

      this.game.ball.speed.y = -this.game.ball.speed.y;

      this.game.player.setScore(this.points);

      this.game.player.setHighScore();

      //Flag brick to be deleted if ball hit it
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    // Draw brick to the context of canvas
    ctx.drawImage(
      this.brick,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
