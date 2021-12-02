const data = require("./input-puzzle.json");
const { sonarSweep } = require("./part1");
const { sonarSweepWithSlidingWindow } = require("./part2");

const exampleInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

console.log(sonarSweep(exampleInput)); // 7
console.log(sonarSweep(data)); // 1553

console.log(sonarSweepWithSlidingWindow(exampleInput, 3)); // 5
console.log(sonarSweepWithSlidingWindow(data, 3)); // 1597
