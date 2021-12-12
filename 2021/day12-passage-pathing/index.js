const exampleInput = [
  "start-A",
  "start-b",
  "A-c",
  "A-b",
  "b-d",
  "A-end",
  "b-end",
];

const exampleInput2 = [
  "fs-end",
  "he-DX",
  "fs-he",
  "start-DX",
  "pj-DX",
  "end-zg",
  "zg-sl",
  "zg-pj",
  "pj-he",
  "RW-he",
  "fs-DX",
  "pj-RW",
  "zg-RW",
  "start-pj",
  "he-WI",
  "zg-he",
  "pj-fs",
  "start-RW",
];

const inputPuzzle = [
  "yw-MN",
  "wn-XB",
  "DG-dc",
  "MN-wn",
  "yw-DG",
  "start-dc",
  "start-ah",
  "MN-start",
  "fi-yw",
  "XB-fi",
  "wn-ah",
  "MN-ah",
  "MN-dc",
  "end-yw",
  "fi-end",
  "th-fi",
  "end-XB",
  "dc-XB",
  "yw-XN",
  "wn-yw",
  "dc-ah",
  "MN-fi",
  "wn-DG",
];

function pushOrInitialize(obj, key, val) {
  if (!obj[key]) {
    obj[key] = [val];
  } else {
    obj[key].push(val);
  }
}

function getPathMap(data) {
  const result = {};

  data.forEach((rawPath) => {
    let [start, end] = rawPath.split("-");

    if (start === "end" || end === "start") {
      [start, end] = [end, start];
    }

    pushOrInitialize(result, start, end);

    if (start !== "start" && end !== "end") {
      // not allow x -> start, end -> x
      pushOrInitialize(result, end, start);
    }
  });

  return result;
}

function isUpperCase(s) {
  return s === s.toUpperCase();
}

function findAllPathsPart1(data) {
  const pathMap = getPathMap(data);
  const result = [];

  function bst(current, path = []) {
    if (current === "end") {
      result.push(path);
      return;
    }

    const availablePaths = pathMap[current];
    availablePaths.forEach((availablePath) => {
      if (isUpperCase(availablePath) || !path.includes(availablePath)) {
        bst(availablePath, [...path, availablePath]);
      }
    });
  }

  bst("start", ["start"]);

  // console.log(result.map((xs) => xs.join("-")));

  return result.length;
}

function findAllPathsPart2(data) {
  const pathMap = getPathMap(data);
  const result = [];

  function bst(current, path = [], hadVisitedASmallCaveTwice = false) {
    if (current === "end") {
      result.push(path);
      return;
    }

    const availablePaths = pathMap[current];
    availablePaths.forEach((availablePath) => {
      if (isUpperCase(availablePath)) {
        // visit a big cave
        bst(availablePath, [...path, availablePath], hadVisitedASmallCaveTwice);
      } else if (hadVisitedASmallCaveTwice) {
        // only allow to visit not-visited small cave
        if (!path.includes(availablePath)) {
          bst(
            availablePath,
            [...path, availablePath],
            hadVisitedASmallCaveTwice
          );
        }
      } else {
        // haven't visited a small cave twice
        if (path.includes(availablePath)) {
          // visit a small cave twice
          bst(availablePath, [...path, availablePath], true);
        } else {
          // visit a new small cave
          bst(
            availablePath,
            [...path, availablePath],
            hadVisitedASmallCaveTwice
          );
        }
      }
    });
  }

  bst("start", ["start"]);

  // console.log(result.map((xs) => xs.join("-")));

  return result.length;
}

console.log(findAllPathsPart1(exampleInput)); // 10
console.log(findAllPathsPart1(exampleInput2)); // 226
console.log(findAllPathsPart1(inputPuzzle)); // 4241

console.log(findAllPathsPart2(exampleInput)); // 36
console.log(findAllPathsPart2(exampleInput2)); // 3509
console.log(findAllPathsPart2(inputPuzzle)); // 122134
