export function detectCollision(ball, gameObject) {
  // This function will detects collision between the ball and any object that is passed to it

  let bottomOfBall = ball.position.y + ball.size;

  let topOfBall = ball.position.y;

  let topOfObject = gameObject.position.y;

  let leftSideOfObject = gameObject.position.x;

  let rightSideOfObject = gameObject.position.x + gameObject.width;

  let bottomOfObject = gameObject.position.y + gameObject.height;

  //Check if the edges of the ball and object collide
  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideOfObject 
  ) {
    //return if there is collision
    return true;
  } else {
    //return if no sollision
    return false;
  }
}

//this is another implementation to identify collision
//using the Pythagorean theorem to check for the distance between to points
// THIS IS NOT IMPLEMENTED YET
export function distance(ball, gameObject) {
  let xDistance = ball.position.x - ball.position.y;
  let yDistance = gameObject.position.x - gameObject.position.y;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
