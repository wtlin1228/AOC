const { checkIsBingo, getUnmarkedSum } = require("./utils");

function bingo(bingoNumbers, boards) {
  const scoreBoard = Array.from({ length: boards.length }, () =>
    Array.from({ length: boards[0].length }, () => false)
  );

  // 1st number, 2nd number, ...
  for (let i = 0; i < bingoNumbers.length; i++) {
    const bingoNumber = bingoNumbers[i];

    // Does anyone BINGO!?
    for (let j = 0; j < scoreBoard.length; j++) {
      const index = boards[j].indexOf(bingoNumber);
      scoreBoard[j][index] = true;

      // Calculate score for winner
      if (i >= 5 && checkIsBingo(scoreBoard[j])) {
        return bingoNumber * getUnmarkedSum(scoreBoard[j], boards[j]);
      }
    }
  }
}

module.exports = {
  bingo,
};
