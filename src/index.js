import Game from "./game.js";

var canvas = document.getElementById("canvasGame");
var ctx = canvas.getContext("2d");

const SCREEN_WIDTH = canvas.getAttribute("width");
const SCREEN_HEIGHT = canvas.getAttribute("height");

let game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);

let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, game.screenWidth, game.screenHeight);

  game.update(deltaTime);

  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
