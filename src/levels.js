import Brick from "./brick.js";

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          x: 60 * brickIndex,
          y: 50 + 24 * rowIndex
        };
        bricks.push(new Brick(game, position));
      }
    });
  });

  return bricks;
}

export function levels() {
  const level1 = [
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1]
  ];

  const level2 = [
    [1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0]
  ];

  const level3 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const level4 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  return [level1, level2, level3, level4];
}
