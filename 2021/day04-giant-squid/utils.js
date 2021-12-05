function checkIsBingo(board) {
  // rows
  // 0, 1, 2, 3, 4
  // 5, 6, 7, 8, 9
  // ...
  for (let i = 0; i < 5; i++) {
    let isBingo = true;

    for (let j = 0; j < 5; j++) {
      if (board[i * 5 + j] !== true) {
        isBingo = false;
      }
    }

    if (isBingo) {
      return true;
    }
  }

  // columns
  // 0, 2
  // 5, 6
  // 10, 11
  // 15, 16
  // 20, 21
  for (let i = 0; i < 5; i++) {
    let isBingo = true;

    for (let j = 0; j < 5; j++) {
      if (board[i + j * 5] !== true) {
        isBingo = false;
      }
    }

    if (isBingo) {
      return true;
    }
  }

  // cross
  // 1,
  // x, 6,
  // x, x, 12,
  // x, x, x, 18,
  // x, x, x, x,  24
  // let isBingo = true;
  // for (let i = 0; i < 5; i++) {
  //   if (board[i * 5 + i] !== true) {
  //     isBingo = false;
  //   }
  // }
  // if (isBingo) {
  //   console.log(`bingo, cross`);
  //   return true;
  // }

  // cross reverse
  // x, x, x, x, 4,
  // x, x, x, 8,
  // x, x, 12,
  // x, 16,
  // 20
  // isBingo = true;
  // for (let i = 0; i < 5; i++) {
  //   if (board[(i + 1) * 5 - (i + 1)] !== true) {
  //     isBingo = false;
  //   }
  // }
  // if (isBingo) {
  //   console.log(board);
  //   console.log(`bingo, cross reverse`);
  //   return true;
  // }

  return false;
}

function getUnmarkedSum(scoreBoard, board) {
  let result = 0;
  for (let i = 0; i < scoreBoard.length; i++) {
    if (!scoreBoard[i]) {
      result += board[i];
    }
  }
  return result;
}

module.exports = {
  checkIsBingo,
  getUnmarkedSum,
};
