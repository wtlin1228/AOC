const data = require("./input-puzzle.json");

const exampleInput = [
  "2199943210",
  "3987894921",
  "9856789892",
  "8767896789",
  "9899965678",
];

function findLowPoints(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[0].length; j++) {
      const point = data[i][j];

      if (i !== 0 && data[i - 1][j] <= point) {
        continue;
      }

      if (i !== data.length - 1 && data[i + 1][j] <= point) {
        continue;
      }

      if (j !== 0 && data[i][j - 1] <= point) {
        continue;
      }

      if (j !== data[0].length - 1 && data[i][j + 1] <= point) {
        continue;
      }

      result.push([i, j]);
    }
  }

  return result;
}

function part1(data) {
  return findLowPoints(data).reduce((acc, curr) => {
    const [i, j] = curr;
    return acc + parseInt(data[i][j]) + 1;
  }, 0);
}

function bst(i, j, map, heightMap) {
  if (heightMap[i][j] === "9" || map[i][j]) {
    return 0;
  }

  map[i][j] = "X";

  let result = 1;

  if (i > 0) {
    result += bst(i - 1, j, map, heightMap);
  }
  if (i !== map.length - 1) {
    result += bst(i + 1, j, map, heightMap);
  }
  if (j > 0) {
    result += bst(i, j - 1, map, heightMap);
  }
  if (j !== map[0].length - 1) {
    result += bst(i, j + 1, map, heightMap);
  }

  return result;
}

function part2(data) {
  const map = Array.from({ length: data.length }, () =>
    Array.from({ length: data[0].length })
  );
  const locations = findLowPoints(data);

  const basinSizes = locations.map(([i, j]) =>
    bst(parseInt(i), parseInt(j), map, data)
  );

  return basinSizes
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, curr) => (acc *= curr), 1);
}

console.log(part1(exampleInput)); // 15
console.log(part1(data)); // 600

console.log(part2(exampleInput)); // 1134
console.log(part2(data)); // 987840
