import "./styles.css";
import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Brick from "./brick.js";
import { level1, buildLevel } from "./levels.js";

export default class Game {
  constructor(screeWidth, screenHeight) {
    this.screenWidth = screeWidth;
    this.screenHeight = screenHeight;
  }

  start() {
    this.ball = new Ball(this);

    this.paddle = new Paddle(this);

    let level = buildLevel(this, level1);

    this.gameObjects = [this.ball, this.paddle, ...level];

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => {
      object.update(deltaTime);
    });
  }

  draw(ctx) {
    this.gameObjects.forEach(object => {
      object.draw(ctx);
    });
  }
}
