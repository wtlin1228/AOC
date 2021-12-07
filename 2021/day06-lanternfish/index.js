const data = require("./input-puzzle.json");

const exampleInput = [3, 4, 3, 1, 2];

function getPosterityCountForParentBornAt(bornAt, EndAt, map) {
  if (map[bornAt]) {
    return map[bornAt];
  }

  let result = 0;
  const childrenBornAt = [];

  // 1st child
  let nextChildBornAt = bornAt + 9;
  if (nextChildBornAt <= EndAt) {
    childrenBornAt.push(nextChildBornAt);
  }

  // 2nd, 3rd, ... child
  while (nextChildBornAt + 7 <= EndAt) {
    nextChildBornAt += 7;
    childrenBornAt.push(nextChildBornAt);
  }

  result += childrenBornAt.length;

  childrenBornAt.forEach((childBornAt) => {
    result += getPosterityCountForParentBornAt(childBornAt, EndAt, map);
  });

  map[bornAt] = result;

  return result;
}

function howManyLanternFishAfterXDays(initialState, days) {
  const posterityCountIfAncestorBornAtMap = {};
  const initialBornAt = initialState.map((x) => x - 8);

  let result = initialBornAt.length;

  for (let i = 0; i < initialBornAt.length; i++) {
    const PosterityCount = getPosterityCountForParentBornAt(
      /* bornAt= */ initialBornAt[i],
      /* EndAt */ days,
      /* map */ posterityCountIfAncestorBornAtMap
    );
    posterityCountIfAncestorBornAtMap[initialBornAt[i]] = PosterityCount;
    result += PosterityCount;
  }

  return result;
}

console.log(howManyLanternFishAfterXDays(exampleInput, 18)); // 26
console.log(howManyLanternFishAfterXDays(exampleInput, 80)); // 5934
console.log(howManyLanternFishAfterXDays(exampleInput, 256)); // 5934

console.log(howManyLanternFishAfterXDays(data, 80)); // 376194
console.log(howManyLanternFishAfterXDays(data, 256)); // 1693022481538
