function submarineWithAim(movements) {
  let horizontalPosition = 0;
  let depthPosition = 0;
  let aim = 0;
  movements.forEach(({ actionType, units }) => {
    if (actionType === "forward") {
      horizontalPosition += units;
      depthPosition += aim * units;
    } else if (actionType === "down") {
      aim += units;
    } else if (actionType === "up") {
      aim -= units;
      aim = aim > 0 ? aim : 0;
    }
  });

  return horizontalPosition * depthPosition;
}

module.exports = {
  submarineWithAim,
};
