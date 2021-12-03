const toDecimal = (x) => parseInt(x.join(""), 2);

function rateGammaAndEpsilon(data) {
  const columnLength = data[0].length;
  const rowCount = data.length;

  const oneCount = Array.from({ length: columnLength }, () => 0);
  for (let row = 0; row < rowCount; row++) {
    for (let column = 0; column < columnLength; column++) {
      oneCount[column] += Number(data[row][column]);
    }
  }

  const gammaRate = oneCount.map((count) => (count > rowCount / 2 ? 1 : 0));
  const epsilonRate = gammaRate.map((bit) => (bit === 1 ? 0 : 1));

  return toDecimal(gammaRate) * toDecimal(epsilonRate);
}

module.exports = {
  rateGammaAndEpsilon,
};
