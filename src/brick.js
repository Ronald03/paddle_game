import { detectCollision } from "./collisionDetection.js";

export default class Brick {
  // Pass an instance of the game class to constructor
  constructor(game, position) {
    // Instance of game class
    this.game = game;

    //grab image of brick
    this.brick = document.getElementById("brickImg");

  //define dimesion of bricks
    this.width = 60;
    this.height = 24;

    // get position from the parameter
    this.position = position;

    //Identify which brick should be deleted when ball hits it
    this.markedForDeletion = false;
  }

  
  //Update changes on the bricks
  update() {
    //check for collision with ball
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;

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
