export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
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
  }
}
