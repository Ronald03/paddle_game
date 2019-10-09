import "./styles.css";
import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Player from "./player.js";
import { buildLevel, levels } from "./levels.js";

//This class is the one that put everything together

const GAMESTATE = {
  PAUSE: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLEVEL: 4
};

export default class Game {
  constructor(screeWidth, screenHeight, playerBoard) {
    //starts with identifying the gaming area
    this.screenWidth = screeWidth;

    this.screenHeight = screenHeight;

    this.board = playerBoard;

    //get input from player
    //this.input = playerBoard.input;

    this.nameEntered = false;

    //The game initiates at the Meny screen
    this.gamestate = GAMESTATE.MENU;

    //Instantiate a player
    this.player = new Player();

    //create instance of the ball
    this.ball = new Ball(this);

    //create instance of the Paddle
    this.paddle = new Paddle(this);

    //create instance of Input handler
    new InputHandler(this.paddle, this);

    //This will hold objects (bricks and paddle)
    this.gameObjects = [];

    //Player starts with 3 lives
    this.gameLives = 5;

    //Array will hold bricks of each level
    this.bricks = [];

    //import levesl from the collisionDetection.js; this creates an Array
    this.levels = levels();

    //Start game on first level (from levels array index 0)
    this.currentLevel = 0;
  }

  start() {
    //define the main screen when game opens
    //This condition prevents game from starting as soon as page loads
    if (
      (this.gamestate !== GAMESTATE.MENU &&
        this.gamestate !== GAMESTATE.NEWLEVEL) ||
      this.player.name === ""
    )
      return;

    //Show level being played on the board
    this.board.lvl.innerHTML = this.currentLevel + 1;

    //Indicates game to start at level being play (current level)
    this.bricks = buildLevel(this, this.levels[this.currentLevel]);

    //Set ball to its initial position
    this.ball.reset();

    //Hold objects
    this.gameObjects = [this.ball, this.paddle];

    //when game is playing estate is RUNNING
    this.gamestate = GAMESTATE.RUNNING;
  }

  update(deltaTime) {
    //check for Lives available and send to GAME OVER if lost all Lives
    if (this.gameLives === 0) this.gamestate = GAMESTATE.GAMEOVER;

    //Game stops if it is on one of these ESTATES and does not update
    if (
      this.gamestate === GAMESTATE.PAUSE ||
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.GAMEOVER ||
      this.gamestate === GAMESTATE.NEWLEVEL
    )
      return;

    // Identify how many bricks are left on each level
    // If bricks quantity is 0 the player has finished the level
    if (this.bricks.length === 0) {
      this.currentLevel++; //Move to next level
      this.gamestate = GAMESTATE.NEWLEVEL; //displays next level screen
      //this.start(); // start game again but now at new level
    }

    //Hold all objects and all bricks in one array
    //update every object (ball and paddle) and every single brick
    [...this.gameObjects, ...this.bricks].forEach(object =>
      object.update(deltaTime)
    );

    //Filter out (remove) the bricks with markedForDeletion === true
    this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);

    //update the Score board everytime a brick get hit
    this.board.score.innerHTML = this.player.score;

    //Show Highest Score
    this.board.hScore.innerHTML = this.player.highScore;
  }

  draw(ctx) {
    //Hold all objects and all bricks in one array
    //draw every object (ball and paddle) and every single brick
    [...this.gameObjects, ...this.bricks].forEach(object => {
      object.draw(ctx);
    });

    // Draw the Estates of the game
    if (this.gamestate === GAMESTATE.PAUSE) this.pauseScreen(ctx);

    if (this.gamestate === GAMESTATE.MENU) this.menuScreen(ctx);

    if (this.gamestate === GAMESTATE.GAMEOVER) this.gameoverScreen(ctx);

    if (this.gamestate === GAMESTATE.NEWLEVEL) this.nextlvlScreen(ctx);
  }

  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSE) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSE;
    }
  }

  pauseScreen(ctx) {
    ctx.rect(0, 0, this.screenWidth, this.screenHeight);
    ctx.fillStyle = "rgba(51, 102, 255, 0.5)";
    ctx.fill();

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Paused", this.screenWidth / 2, this.screenHeight / 2);
  }

  menuScreen(ctx) {
    ctx.rect(0, 0, this.screenWidth, this.screenHeight);
    ctx.fillStyle = "rgba(51, 102, 255, 0.5)";
    ctx.fill();

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(
      "Press SPACE bar to start game",
      this.screenWidth / 2,
      this.screenHeight / 2
    );
    //Show the input for the player's name on the menu screen
    this.board.input.style.display = "block";

    if (this.nameEntered) {
      //if player entered name
      this.board.input.style.display = "none"; //Remove the input
      this.player.name = this.board.input.value; //Save the name of the player
      this.board.pName.innerHTML = this.player.name; //show the name of player on the board
    }
  }

  gameoverScreen(ctx) {
    ctx.rect(0, 0, this.screenWidth, this.screenHeight);
    ctx.fillStyle = "rgba(51, 102, 255, 0.5)";
    ctx.fill();

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", this.screenWidth / 2, this.screenHeight / 2);
  }

  nextlvlScreen(ctx) {
    ctx.rect(0, 0, this.screenWidth, this.screenHeight);
    ctx.fillStyle = "rgba(51, 102, 255, 0.5)";
    ctx.fill();

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(
      "Press SPACE bar to move to next level",
      this.screenWidth / 2,
      this.screenHeight / 2
    );
  }
}
