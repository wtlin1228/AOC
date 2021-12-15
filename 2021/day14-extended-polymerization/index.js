const { data, polymerPairMap } = require("./input-puzzle");

const exampleInput = "NNCB";
const examplePolymerPairMap = {
  CH: "B",
  HH: "N",
  CB: "H",
  NH: "C",
  HB: "C",
  HC: "B",
  HN: "C",
  NN: "C",
  BH: "H",
  NC: "B",
  NB: "B",
  BN: "B",
  BB: "N",
  BC: "B",
  CC: "N",
  CN: "C",
};

function combineTwoElement(x, y) {
  return `${x}${y}`;
}

function addToMap(map, x, frequency) {
  if (!map[x]) {
    map[x] = frequency;
  } else {
    map[x] += frequency;
  }
}

function solution(data, pairMap, steps) {
  const duplicatedCounter = {};

  // Initialize
  let currentMap = {};
  for (let i = 0; i < data.length - 1; i++) {
    addToMap(currentMap, combineTwoElement(data[i], data[i + 1]), 1);
    if (i + 1 !== data.length - 1) {
      addToMap(duplicatedCounter, data[i + 1], 1);
    }
  }

  // Perform polymerization N steps
  for (let i = 0; i < steps; i++) {
    let nextMap = {};
    Object.entries(currentMap).forEach(([pair, frequency]) => {
      const toInsert = pairMap[pair];
      addToMap(nextMap, combineTwoElement(pair[0], toInsert), frequency);
      addToMap(nextMap, combineTwoElement(toInsert, pair[1]), frequency);
      addToMap(duplicatedCounter, toInsert, frequency);
    });
    currentMap = nextMap;
  }

  // Get total number of each character
  const charFrequencyMap = {};
  Object.entries(currentMap).forEach(([pair, frequency]) => {
    addToMap(charFrequencyMap, pair[0], frequency);
    addToMap(charFrequencyMap, pair[1], frequency);
  });
  Object.entries(duplicatedCounter).forEach(([char, frequency]) => {
    if (charFrequencyMap[char]) {
      charFrequencyMap[char] -= frequency;
    }
  });

  // Get result
  let max = -Infinity;
  let min = Infinity;
  Object.values(charFrequencyMap).forEach((x) => {
    if (x > max) {
      max = x;
    }

    if (x < min) {
      min = x;
    }
  });

  return max - min;
}

console.log(solution(exampleInput, examplePolymerPairMap, 40)); // 2188189693529
console.log(solution(data, polymerPairMap, 40)); // 4441317262452
