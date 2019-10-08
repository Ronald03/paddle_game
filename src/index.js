import Game from "./game.js";

// get the canvas from the html file
var canvas = document.getElementById("canvasGame");

// grab the canvas' context where everything will be drawed on
var ctx = canvas.getContext("2d");

//Player input name
let INPUT = document.getElementById("playerInput");
//Capture dimenssions of the canvas (gaming area)
const SCREEN_WIDTH = canvas.getAttribute("width");
const SCREEN_HEIGHT = canvas.getAttribute("height");

// Instanciate a new game to be run on the game loop
let game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT, INPUT);

let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  // Clear the canvas on every update
  ctx.clearRect(0, 0, game.screenWidth, game.screenHeight);

  // Capture updates
  game.update(deltaTime);

  // Draw context of game
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
