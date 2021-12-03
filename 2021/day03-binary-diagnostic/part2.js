const TYPES = {
  O2: "O2",
  CO2: "CO2",
};

const FILTER_BIT = {
  [TYPES.O2]: {
    major: 1,
    second: 0,
  },
  [TYPES.CO2]: {
    major: 0,
    second: 1,
  },
};

function filterRateRecursive(bitsArr, round, type) {
  if (round > bitsArr[0].length) {
    return;
  }

  if (bitsArr.length === 1) {
    return bitsArr[0];
  }

  let oneCount = 0;
  bitsArr.forEach((bits) => {
    oneCount += Number(bits[round]);
  });

  const filterBit =
    oneCount >= bitsArr.length / 2
      ? FILTER_BIT[type].major
      : FILTER_BIT[type].second;

  const filteredBitsArray = bitsArr.filter(
    (bits) => Number(bits[round]) === filterBit
  );

  return filterRateRecursive(filteredBitsArray, round + 1, type);
}

const toDecimal = (x) => parseInt(x, 2);

function rateO2AndCO2(data) {
  const oxygenGeneratorRatingBinary = filterRateRecursive(data, 0, TYPES.O2);
  const CO2ScrubberRatingResultBinary = filterRateRecursive(data, 0, TYPES.CO2);

  return (
    toDecimal(oxygenGeneratorRatingBinary) *
    toDecimal(CO2ScrubberRatingResultBinary)
  );
}

module.exports = {
  rateO2AndCO2,
};
