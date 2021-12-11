function getNearbyPositions(map, [i, j]) {
  const result = [];

  if (i - 1 >= 0 && j - 1 >= 0) {
    result.push([i - 1, j - 1]);
  }
  if (i - 1 >= 0) {
    result.push([i - 1, j]);
  }
  if (i - 1 >= 0 && j + 1 < map[0].length) {
    result.push([i - 1, j + 1]);
  }
  if (j - 1 >= 0) {
    result.push([i, j - 1]);
  }
  if (j + 1 <= map[0].length - 1) {
    result.push([i, j + 1]);
  }
  if (i + 1 < map.length && j - 1 >= 0) {
    result.push([i + 1, j - 1]);
  }
  if (i + 1 < map.length) {
    result.push([i + 1, j]);
  }
  if (i + 1 < map.length && j + 1 <= map[0].length - 1) {
    result.push([i + 1, j + 1]);
  }

  return result;
}

function chargeNearbyOctopuses(map, [i, j]) {
  const nearbyPositions = getNearbyPositions(map, [i, j]);

  const readyToFlash = [];
  nearbyPositions.forEach(([i, j]) => {
    map[i][j] += 1;

    if (map[i][j] === 10) {
      readyToFlash.push([i, j]);
    }
  });

  readyToFlash.forEach((position) => chargeNearbyOctopuses(map, position));
}

function chargeAllOctopuses(map) {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      map[i][j] += 1;
      if (map[i][j] === 10) {
        chargeNearbyOctopuses(map, [i, j]);
      }
    }
  }
}

function resetAndGetFlashCount(map) {
  let result = 0;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] > 9) {
        map[i][j] = 0;
        result += 1;
      }
    }
  }
  return result;
}

function areAllOctopusesFlashingTogether(map) {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

const peakData = (data) => {
  console.log(
    JSON.stringify(
      data.map((arr) =>
        arr
          .map((element) => {
            if (element < 10) {
              return `  ${element}`;
            }
            return ` ${element}`;
          })
          .join(",")
      ),
      null,
      2
    )
  );
};

function part1(data, steps) {
  const deepCopyData = JSON.parse(JSON.stringify(data));
  let result = 0;
  for (let i = 0; i < steps; i++) {
    chargeAllOctopuses(deepCopyData);
    result += resetAndGetFlashCount(deepCopyData);
  }
  return result;
}

function part2(data) {
  const deepCopyData = JSON.parse(JSON.stringify(data));
  let steps = 0;
  while (!areAllOctopusesFlashingTogether(deepCopyData)) {
    chargeAllOctopuses(deepCopyData);
    resetAndGetFlashCount(deepCopyData);
    steps += 1;
  }
  return steps;
}

const inputPuzzle = [
  [5, 2, 5, 1, 5, 7, 8, 1, 8, 1],
  [6, 1, 5, 8, 4, 5, 2, 3, 1, 3],
  [1, 8, 1, 8, 5, 7, 8, 5, 7, 1],
  [3, 8, 4, 4, 6, 1, 5, 1, 4, 3],
  [6, 8, 5, 7, 2, 5, 1, 2, 4, 4],
  [2, 3, 7, 5, 8, 1, 7, 6, 1, 3],
  [8, 8, 8, 3, 5, 1, 4, 4, 3, 5],
  [2, 3, 2, 1, 2, 6, 5, 7, 3, 5],
  [2, 8, 5, 7, 2, 7, 5, 1, 8, 2],
  [4, 8, 2, 1, 1, 5, 6, 6, 4, 4],
];

console.log(part1(inputPuzzle, 100)); // 1637
console.log(part2(inputPuzzle)); // 242
