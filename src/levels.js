import Brick from "./brick.js";
import Powerup from "./powerUps.js";

export function buildLevel(game, level) {

  let bricks = [];

  level.forEach((row, rowIndex) => {

    row.forEach((brick, brickIndex) => {

      if (brick === 1 || brick === 2) {

        let position = {
          x: 60 * brickIndex,
          y: 50 + 24 * rowIndex
        };

        bricks.push(new Brick(game, position, brick - 1));

      } else if (brick > 10 && brick < 20) {

        let position = {
          x: 60 * brickIndex,
          y: 50 + 24 * rowIndex
        };

        let brk = new Brick(game, position, 0);

        bricks.push(new Powerup(brk, game, brick - 10));

        bricks.push(brk);

      } else if (brick > 19) {

        let position = {
          x: 60 * brickIndex,
          y: 50 + 24 * rowIndex
        };

        let brk = new Brick(game, position, 1);

        bricks.push(new Powerup(brk, game, brick - 20));

        bricks.push(brk);
      }
    });
  });

  return bricks;
}

export function levels() {

  const level1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [12, 1, 1, 1, 1, 2, 2, 2, 2, 20],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const level2 = [
    [0, 1, 1, 1, 11, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 2, 22, 0],
    [0, 2, 23, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0]
  ];

  const level3 = [
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 0, 1, 10],
    [1, 0, 13, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
  ];

  const level4 = [
    [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 13, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1]
  ];

  const level5 = [
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1]
  ];

  const level6 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  return [level1, level2, level3, level4, level5, level6];
}
