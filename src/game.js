import "./styles.css";
import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Brick from "./brick.js";
import { level1, buildLevel } from "./levels.js";


const GAMESTATE = {
  PAUSE: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
};

export default class Game {
  constructor(screeWidth, screenHeight) {
    this.screenWidth = screeWidth;
    this.screenHeight = screenHeight;
  }

  start() {
    this.gamestate = GAMESTATE.RUNNING;

    this.ball = new Ball(this);

    this.paddle = new Paddle(this);

    let level = buildLevel(this, level1);

    this.gameObjects = [this.ball, this.paddle, ...level];

    new InputHandler(this.paddle, this);
  }

  update(deltaTime) {

    if(this.gamestate === GAMESTATE.PAUSE) return;
    
    this.gameObjects.forEach(object => {
      object.update(deltaTime);
    });

    this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
  }

  draw(ctx) {
    this.gameObjects.forEach(object => {
      object.draw(ctx);
    });

    if(this.gamestate === GAMESTATE.PAUSE) {
      ctx.rect(0,0, this.screeWidth, this.screenHeight);
      ctx.fillStyle = "rgb(51, 102, 255)";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center"; 
      ctx.fillText("Pause", this.screeWidth/2, this.screenHeight/2);
    }
  }

  togglePause() {
    if(this.gamestate === GAMESTATE.PAUSE) {
      this.gamestate = GAMESTATE.RUNNING;
    }else {
      this.gamestate= GAMESTATE.PAUSE;
    }
  }
}
