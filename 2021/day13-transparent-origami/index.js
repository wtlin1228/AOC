const { points, instructions } = require("./input-puzzle");

const exampleInput = [
  "6,10",
  "0,14",
  "9,10",
  "0,3",
  "10,4",
  "4,11",
  "6,0",
  "6,12",
  "4,1",
  "0,13",
  "10,12",
  "3,4",
  "3,0",
  "8,4",
  "1,10",
  "2,14",
  "8,10",
  "9,0",
];

const exampleInstructions = [{ y: 7 }, { x: 5 }];

function getPointFrequencyMap(rawData) {
  const result = {};
  rawData.forEach((pointString) => {
    result[pointString] = 1;
  });
  return result;
}

function foldUp(pointMap, foldY) {
  Object.keys(pointMap).forEach((pointString) => {
    const [x, y] = pointString.split(",");
    if (y > foldY) {
      const foldedPointString = `${x},${foldY * 2 - y}`;
      if (pointMap[foldedPointString]) {
        pointMap[foldedPointString] += pointMap[pointString];
      } else {
        pointMap[foldedPointString] = pointMap[pointString];
      }
      delete pointMap[pointString];
    } else if (y === foldY) {
      delete pointMap[pointString];
    }
  });
}

function foldLeft(pointMap, foldX) {
  Object.keys(pointMap).forEach((pointString) => {
    const [x, y] = pointString.split(",");
    if (x > foldX) {
      const foldedPointString = `${foldX * 2 - x},${y}`;
      if (pointMap[foldedPointString]) {
        pointMap[foldedPointString] += pointMap[pointString];
      } else {
        pointMap[foldedPointString] = pointMap[pointString];
      }
      delete pointMap[pointString];
    } else if (x === foldX) {
      delete pointMap[pointString];
    }
  });
}

function display(pointMap, instructions) {
  let lastFoldX;
  let lastFoldY;
  instructions.forEach(({ x, y }) => {
    if (x) {
      lastFoldX = x;
    }
    if (y) {
      lastFoldY = y;
    }
  });

  const display = Array.from({ length: lastFoldY }, () =>
    Array.from({ length: lastFoldX })
  );

  for (let x = 0; x < lastFoldX; x++) {
    for (let y = 0; y < lastFoldY; y++) {
      const pointString = `${x},${y}`;
      if (pointMap[pointString]) {
        display[y][x] = "#";
      } else {
        display[y][x] = ".";
      }
    }
  }

  console.log(display.map((arr) => arr.join("")));
}

function foldWithInstructions(data, instructions) {
  const map = getPointFrequencyMap(data);
  instructions.forEach(({ x, y }) => {
    if (x) {
      foldLeft(map, x);
    }
    if (y) {
      foldUp(map, y);
    }
  });

  display(map, instructions);
}

// .##..###..#..#.####.###...##..#..#.#..#.
// #..#.#..#.#..#....#.#..#.#..#.#..#.#..#.
// #..#.#..#.####...#..#..#.#....#..#.####.
// ####.###..#..#..#...###..#....#..#.#..#.
// #..#.#.#..#..#.#....#....#..#.#..#.#..#.
// #..#.#..#.#..#.####.#.....##...##..#..#.
foldWithInstructions(points, instructions);
