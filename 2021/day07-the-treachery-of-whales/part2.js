function sumArray(xs) {
  return xs.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

function findArrayMinimum(xs) {
  let min = Number.POSITIVE_INFINITY;
  xs.forEach((x) => {
    if (x < min) {
      min = x;
    }
  });
  return min;
}

function findAveragePoint(positions) {
  const sum = sumArray(positions);
  const miniumPosition = findArrayMinimum(positions);
  const averagePoint =
    (sum - miniumPosition * positions.length) / positions.length;

  return averagePoint;
}

function calculateNeededFuel(positions, destinationPosition) {
  let result = 0;
  for (let i = 0; i < positions.length; i++) {
    const steps = Math.abs(positions[i] - destinationPosition);
    // 1 + 2 + 3 + ... + steps
    result += ((1 + steps) * steps) / 2;
  }
  return result;
}

/**
 * The average point is the best destination in this case.
 * The reason is fuel consumption is not linear anymore. It's (1 + steps) * steps / 2 now.
 * Therefore the fewer steps for each position to move, the less power consumption needed.
 */
function getTotalFuel(positions) {
  const averagePoint = findAveragePoint(positions);

  if (Number.isInteger(averagePoint)) {
    return calculateNeededFuel(positions, averagePoint);
  }

  return Math.min(
    calculateNeededFuel(positions, Math.ceil(averagePoint)),
    calculateNeededFuel(positions, Math.floor(averagePoint))
  );
}

module.exports = {
  getTotalFuel,
};
