function createGameBoard(rows, column) {
  const board = [];
  for (let i = 0; i < rows; i++) {
    const cols = new Array(column).fill(0);
    board.push(cols);
  }

  return board;
}

// all moves a knight can make
const knightMoves = [
  [-2, -1],
  [-2, 1],
  [2, -1],
  [2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
];

// valid moves a knight can make from a given start square
function validMoves(start, boardSize = 8) {
  const boardDimension = [boardSize, boardSize];

  const allMoves = knightMoves.map((move) => {
    let moveX = move[0];
    let moveY = move[1];

    let startX = start[0];
    let startY = start[1];

    return [moveX + startX, moveY + startY];
  });

  const validMoves = allMoves.filter((move) => {
    return (
      move[0] < boardDimension[0] &&
      move[0] >= 0 &&
      move[1] < boardDimension[1] &&
      move[1] >= 0
    );
  });

  return validMoves;
}

function tracePath(obj, start, end) {
  let curr = end;
  const pathArr = [];

  while (curr !== start) {
    pathArr.push(curr);
    curr = obj[curr];
  }
  pathArr.push(start);

  // return pathArr.reverse();
  console.log(`You made it in ${pathArr.length} steps. Here's your Path:`);
  console.log(pathArr.reverse());
}

function knightTravails(start, end) {
  const gameBoard = createGameBoard(8, 8);
  const queue = [start];

  const pathObj = {};
  pathObj[start] = null;

  while (queue.length > 0) {
    let square = queue.shift();

    let areEqual = square.every((element, index) => element === end[index]);

    if (areEqual) {
      return tracePath(pathObj, start, end);
    }

    let allMoves = validMoves(square);
    for (let move of allMoves) {
      let moveX = move[0];
      let moveY = move[1];

      if (gameBoard[moveX][moveY] === 0) {
        queue.push(move);
        gameBoard[moveX][moveY] = 1;
        pathObj[move] = square;
      }
    }
  }
}

console.log(knightTravails([3, 1], [7, 5]));
