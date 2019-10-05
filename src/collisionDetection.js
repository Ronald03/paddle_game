export function detectCollision(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;

  let topOfBall = ball.position.y;

  let topOfObject = gameObject.position.y;

  let leftSideOfObject = gameObject.position.x;

  let rightSideOfObject = gameObject.position.x + gameObject.width;

  let bottomOfObject = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideOfObject 
  ) {
    return true;
  } else {
    return false;
  }
}

export function distance(ball, gameObject) {
  let xDistance = ball.position.x - ball.position.y;
  let yDistance = gameObject.position.x - gameObject.position.y;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
