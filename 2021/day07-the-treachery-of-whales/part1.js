function findMedianPoint(positions) {
  const sortedPositions = [...positions].sort((a, b) => a - b);

  // sortedPositions.length = 10
  // 10 / 2 - 1 = 4
  // sortedPositions.length = 9
  // 9 / 2 - 1 = 3.5 -> 4
  const medianIdx = Math.ceil(sortedPositions.length / 2) - 1;
  return sortedPositions[medianIdx];
}

function calculateNeededFuel(positions, destinationPosition) {
  let result = 0;
  for (let i = 0; i < positions.length; i++) {
    result += Math.abs(positions[i] - destinationPosition);
  }
  return result;
}

/**
 * The median point is the best destination in this case.
 *
 * A------------------B  <--  every points between A and B could be good destination
 * A-----C------------B  <--  C is the best destination
 * A-----C--------D---B  <--  every points between C and D could be good destination
 * A-----C----E---D---B  <--  E is the best destination
 */
function getTotalFuelInLinearMode(positions) {
  const medianPoint = findMedianPoint(positions);
  return calculateNeededFuel(positions, medianPoint);
}

module.exports = {
  getTotalFuelInLinearMode,
};
