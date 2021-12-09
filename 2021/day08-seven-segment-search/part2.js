function getSortedString(s) {
  return s.split("").sort().join("");
}

function isStringContainChars(number, xs) {
  for (let i = 0; i < xs.length; i++) {
    const x = xs[i];
    if (!number.includes(x)) {
      return false;
    }
  }
  return true;
}

function getRealNumber(samples, displays) {
  let map = {};
  let number1_cf;
  let number4_bcdf;
  const samplesWithLength5 = [];
  const samplesWithLength6 = [];

  for (let i = 0; i < samples.length; i++) {
    const sortedSample = getSortedString(samples[i]);

    if (sortedSample.length === 2) {
      number1_cf = sortedSample;
      map[sortedSample] = 1;
    } else if (sortedSample.length === 3) {
      map[sortedSample] = 7;
    } else if (sortedSample.length === 4) {
      number4_bcdf = sortedSample;
      map[sortedSample] = 4;
    } else if (sortedSample.length === 7) {
      map[sortedSample] = 8;
    } else if (sortedSample.length === 5) {
      samplesWithLength5.push(sortedSample);
    } else if (sortedSample.length === 6) {
      samplesWithLength6.push(sortedSample);
    }
  }

  let bd = [];
  for (let i = 0; i < number4_bcdf.length; i++) {
    if (!number1_cf.includes(number4_bcdf[i])) {
      bd.push(number4_bcdf[i]);
    }
  }

  for (let i = 0; i < samplesWithLength5.length; i++) {
    const sample = samplesWithLength5[i];
    if (isStringContainChars(sample, number1_cf)) {
      map[sample] = 3;
    } else if (isStringContainChars(sample, bd)) {
      map[sample] = 5;
    } else {
      map[sample] = 2;
    }
  }

  for (let i = 0; i < samplesWithLength6.length; i++) {
    const sample = samplesWithLength6[i];
    if (!isStringContainChars(sample, number1_cf)) {
      map[sample] = 6;
    } else if (!isStringContainChars(sample, bd)) {
      map[sample] = 0;
    } else {
      map[sample] = 9;
    }
  }

  const result = displays
    .map(getSortedString)
    .map((x) => map[x])
    .join("");

  return parseInt(result);
}

function sumAllDisplays(data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    const { samples, displays } = data[i];
    result += getRealNumber(samples, displays);
  }
  return result;
}

module.exports = {
  sumAllDisplays,
};
