const data = require("./input-puzzle.json");
const { rateGammaAndEpsilon } = require("./part1");
const { rateO2AndCO2 } = require("./part2");

const exampleInput = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

console.log(rateGammaAndEpsilon(exampleInput)); // 198
console.log(rateGammaAndEpsilon(data)); // 2640986

console.log(rateO2AndCO2(exampleInput)); // 230
console.log(rateO2AndCO2(data)); // 6822109
