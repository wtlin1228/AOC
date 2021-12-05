const { checkIsBingo, getUnmarkedSum } = require("./utils");

function lastBingo(bingoNumbers, boards) {
  const scoreBoard = Array.from({ length: boards.length }, () =>
    Array.from({ length: 25 }, () => false)
  );

  const winners = [];

  // 1st number, 2nd number, ...
  for (let i = 0; i < bingoNumbers.length; i++) {
    const bingoNumber = bingoNumbers[i];

    // Does anyone BINGO!?
    for (let j = 0; j < scoreBoard.length; j++) {
      const index = boards[j].indexOf(bingoNumber);
      scoreBoard[j][index] = true;

      if (i >= 5 && !winners.includes(j) && checkIsBingo(scoreBoard[j])) {
        winners.push(j);

        // Finally find our last winner
        if (winners.length === boards.length) {
          return bingoNumber * getUnmarkedSum(scoreBoard[j], boards[j]);
        }
      }
    }
  }
}

module.exports = {
  lastBingo,
};
