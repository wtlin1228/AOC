const data = require("./input-puzzle.json");
const { submarine } = require("./part1");
const { submarineWithAim } = require("./part2");

const exampleInput = [
  { actionType: "forward", units: 5 },
  { actionType: "down", units: 5 },
  { actionType: "forward", units: 8 },
  { actionType: "up", units: 3 },
  { actionType: "down", units: 8 },
  { actionType: "forward", units: 2 },
];

console.log(submarine(exampleInput)); // 150
console.log(submarine(data)); // 2027977

console.log(submarineWithAim(exampleInput)); // 900
console.log(submarineWithAim(data)); // 1903644897
