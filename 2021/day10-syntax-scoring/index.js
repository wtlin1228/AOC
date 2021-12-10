const data = require("./input-puzzle.json");
const { MaxHeap } = require("./max-heap");

const exampleInput = [
  "[({(<(())[]>[[{[]{<()<>>",
  "[(()[<>])]({[<{<<[]>>(",
  "{([(<{}[<>[]}>{[]{[(<()>",
  "(((({<>}<{<{<>}{[]{[]{}",
  "[[<[([]))<([[{}[[()]]]",
  "[{[{({}]{}}([{[{{{}}([]",
  "{<[[]]>}<{[{[{[]{()[[[]",
  "[<(<(<(<{}))><([]([]()",
  "<{([([[(<>()){}]>(<<{{",
  "<{([{{}}[<[[[<>{}]]]>[]]",
];

const openChars = ["(", "[", "{", "<"];
const closeChars = [")", "]", "}", ">"];

const COMPLETE = "complete";
const CORRUPTED = "corrupted";
const INCOMPLETE = "incomplete";

function checkSyntax(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (openChars.includes(currentChar)) {
      stack.push(currentChar);
    }

    if (closeChars.includes(currentChar)) {
      const lastOpenChar = stack.pop();
      if (closeChars.indexOf(currentChar) !== openChars.indexOf(lastOpenChar)) {
        return [CORRUPTED, currentChar];
      }
    }
  }

  if (stack.length !== 0) {
    return [INCOMPLETE, stack];
  }

  return [COMPLETE];
}

function getCorruptedScore(data) {
  const scoreMap = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137,
  };

  let result = 0;
  for (let i = 0; i < data.length; i++) {
    const [errorType, errorPayload] = checkSyntax(data[i]);

    if (errorType === CORRUPTED) {
      result += scoreMap[errorPayload];
    }
  }

  return result;
}

function getIncompleteScore(data) {
  const scoreMap = {
    "(": 1,
    "[": 2,
    "{": 3,
    "<": 4,
  };

  let result = [];
  for (let i = 0; i < data.length; i++) {
    const [errorType, errorPayload] = checkSyntax(data[i]);

    if (errorType === INCOMPLETE) {
      const score = errorPayload.reverse().reduce((acc, curr) => {
        return acc * 5 + scoreMap[curr];
      }, 0);
      result.push(score);
    }
  }

  const heap = new MaxHeap(result);
  heap.buildMaxHeap(); // O(n), where n = result.length

  return heap.values[Math.floor(heap.heapSize() / 2)];
}

console.log(getCorruptedScore(exampleInput)); // 26397
console.log(getCorruptedScore(data)); // 288291

console.log(getIncompleteScore(exampleInput)); // 288957
console.log(getIncompleteScore(data)); // 820045242
