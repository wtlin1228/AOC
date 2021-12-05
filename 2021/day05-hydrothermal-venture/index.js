const data = require("./input-puzzle.json");

const exampleInput = [
  // [start x, start y, end x, end y]
  [0, 9, 5, 9],
  [8, 0, 0, 8],
  [9, 4, 3, 4],
  [2, 2, 2, 1],
  [7, 0, 7, 4],
  [6, 4, 2, 0],
  [0, 9, 2, 9],
  [3, 4, 1, 4],
  [0, 0, 8, 8],
  [5, 5, 8, 2],
];

function crossLines(lines, enableDiagonalLines = false) {
  const size = 1000;

  const drawingBoard = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => 0)
  );

  lines.forEach(([x1, y1, x2, y2]) => {
    if (y1 === y2) {
      // horizontal line
      for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
        drawingBoard[y1][x] += 1;
      }
    } else if (x1 === x2) {
      // vertical line
      for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
        drawingBoard[y][x1] += 1;
      }
    } else if (enableDiagonalLines) {
      // Find left point
      let leftX;
      let leftY;
      let rightX;
      let rightY;
      if (x1 < x2) {
        leftX = x1;
        leftY = y1;
        rightX = x2;
        rightY = y2;
      } else {
        leftX = x2;
        leftY = y2;
        rightX = x1;
        rightY = y1;
      }

      for (let i = 0; i <= rightX - leftX; i++) {
        const x = leftX + i;
        const y = leftY < rightY ? leftY + i : leftY - i;
        drawingBoard[y][x] += 1;
      }
    }
  });

  // drawingBoard.forEach((line) => console.log(line.join(" ")));
  return drawingBoard.reduce((acc, curr) => {
    curr.forEach((n) => {
      if (n >= 2) {
        acc += 1;
      }
    });
    return acc;
  }, 0);
}

console.log(crossLines(exampleInput)); // 5
console.log(crossLines(data)); // 8622

console.log(crossLines(exampleInput, true)); // 12
console.log(crossLines(data, true)); // 22037
