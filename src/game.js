import "./styles.css";
import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

export default class Game {
  constructor(screeWidth, screenHeight) {
    this.screenWidth = screeWidth;
    this.screenHeight = screenHeight;
  }

  start() {
    this.ball = new Ball(this);

    this.paddle = new Paddle(this);

    this.gameObjects = [this.ball, this.paddle];

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
