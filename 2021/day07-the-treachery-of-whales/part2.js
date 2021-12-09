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
 * 
 * Prof:
 * Given X = [X1, X2, ..., Xn]. Find Y that minimize Σ(Xi - Y)^2
 *
 *        Σ(Xi - Y)^2 = Σ(Xi^2) + Σ(Y^2 - 2XiY)
 *                    = Σ(Xi^2) + nY^2 - 2Y * Σ(Xi)
 *                    = Σ(Xi^2) + nY^2 - 2Y * nx̄
 *                    = Σ(Xi^2) + n(Y^2 - 2Yx̄)
 *                    = Σ(Xi^2) + n[(Y - x̄)^2 - x̄^2]
 *.       => Y = x̄ #
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
