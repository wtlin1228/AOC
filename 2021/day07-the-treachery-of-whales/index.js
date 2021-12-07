const data = require("./input-puzzle.json");
const { getTotalFuelInLinearMode } = require("./part1");
const { getTotalFuel } = require("./part2");

const exampleInput = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

console.log(getTotalFuelInLinearMode(exampleInput)); // 37
console.log(getTotalFuelInLinearMode(data)); // 336040

console.log(getTotalFuel(exampleInput)); // 168
console.log(getTotalFuel(data)); // 94813675
