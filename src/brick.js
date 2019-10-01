export default class Brick {
  constructor(game, position) {
    this.game = game;
    this.brick = document.getElementById("brickImg");

    this.width = 60;
    this.height = 24;

    this.position = position;
  }

  update() {}

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
