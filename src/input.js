export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {

        case 37:
          if (game.isGameInitiated) {
            game.movePaddleBallLeft(paddle, game.ball);
          } else {
            paddle.moveLeft();
          }

          break;

        case 39:
          if (game.isGameInitiated) {
            game.movePaddleBallRight(paddle, game.ball);
          } else {
            paddle.moveRight();
          }

          break;

        case 87:
          game.togglePause();

          break;

        case 16:
          if (!game.isGameInitiated) {

            game.isGameInitiated = true;
          }

          game.start();

          break;

        case 32:
          if (game.isGameInitiated) {
            game.ball.rollBall();

            game.isGameInitiated = false;
          }

          break;

        default:
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {

        case 37:
          paddle.stop();
          break;

        case 39:
          paddle.stop();
          break;
        default:
      }
    });

    if (game.gamestate === 2) {
      game.board.input.addEventListener("keydown", event => {
        
        switch (event.keyCode) {
          case 13:
            game.player.name = game.board.input.value;
            if (game.player.name !== "") game.nameEntered = true;

            break;

          default:
        }
      });
    }
  }
}
