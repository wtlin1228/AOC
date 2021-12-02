function submarine(movements) {
  let horizontalPosition = 0;
  let depthPosition = 0;
  movements.forEach(({ actionType, units }) => {
    if (actionType === "forward") {
      horizontalPosition += units;
    } else if (actionType === "down") {
      depthPosition += units;
    } else if (actionType === "up") {
      depthPosition -= units;
      depthPosition = depthPosition > 0 ? depthPosition : 0;
    }
  });

  return horizontalPosition * depthPosition;
}

module.exports = {
  submarine,
};
