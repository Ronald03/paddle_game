export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
          break;
        case 27:
          game.togglePause();
          break;
        case 32:
          game.start();
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
