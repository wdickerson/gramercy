console.log('lets play boggle');

function checkDictionary (prefix, boardState, position) {
  // could do this lookup more efficiently...
  if (dictionary.indexOf(prefix) != -1) {
    wordsFound.push(prefix);
  }
  
  // If we know the dictionary contains nothing that starts with
  // this prefix, return
  if (!dictionary.some(w => w.startsWith(prefix))) {
    return;
  }
  
  // check all valid moves
  const x = position[0];
  const y = position[1];
  
  if (x <= 2 && !boardState[x + 1][y]) {
    const newX = x + 1;
    const newY = y;
    const newPrefix = prefix + board[newX][newY];
    // slow/ugly hack to clone array:
    const newBoardState = JSON.parse(JSON.stringify(boardState));
    newBoardState[newX][newY] = true;
    checkDictionary(newPrefix, newBoardState, [newX, newY]);
    
  } 
  if (x <= 2 && y <= 2 && !boardState[x + 1][y + 1]) {
    const newX = x + 1;
    const newY = y + 1;
    const newPrefix = prefix + board[newX][newY];
    const newBoardState = JSON.parse(JSON.stringify(boardState));
    newBoardState[newX][newY] = true;
    checkDictionary(newPrefix, newBoardState, [newX, newY]);
    
  } 
  if (y <= 2 && !boardState[x][y + 1]) {
    const newX = x;
    const newY = y + 1;
    const newPrefix = prefix + board[newX][newY];
    const newBoardState = JSON.parse(JSON.stringify(boardState));
    newBoardState[newX][newY] = true;
    checkDictionary(newPrefix, newBoardState, [newX, newY]);
    
  }
  if (x >= 1 && y <= 2 && !boardState[x - 1][y + 1]) {
    const newX = x - 1;
    const newY = y + 1;
    const newPrefix = prefix + board[newX][newY];
    const newBoardState = JSON.parse(JSON.stringify(boardState));
    newBoardState[newX][newY] = true;
    checkDictionary(newPrefix, newBoardState, [newX, newY]);
    
  }
  if (x >= 1 && !boardState[x - 1][y]) {
    const newX = x - 1;
    const newY = y;
    const newPrefix = prefix + board[newX][newY];
    const newBoardState = JSON.parse(JSON.stringify(boardState));
    newBoardState[newX][newY] = true;
    checkDictionary(newPrefix, newBoardState, [newX, newY]);
    
  }
  if (x >= 1 && y >= 1 && !boardState[x - 1][y - 1]) {
    const newX = x - 1;
    const newY = y - 1;
    const newPrefix = prefix + board[newX][newY];
    const newBoardState = JSON.parse(JSON.stringify(boardState));
    newBoardState[newX][newY] = true;
    checkDictionary(newPrefix, newBoardState, [newX, newY]);
    
  }
  if (y >= 1 && !boardState[x][y - 1]) {
    const newX = x;
    const newY = y - 1;
    const newPrefix = prefix + board[newX][newY];
    const newBoardState = JSON.parse(JSON.stringify(boardState));
    newBoardState[newX][newY] = true;
    checkDictionary(newPrefix, newBoardState, [newX, newY]);
    
  } 
}

const board = [
  ['a', 'f', 's', 'o'],
  ['e', 'r', 'i', 'p'],
  ['k', 'e', 't', 'n'],
  ['f', 'l', 'u', 'g']
]

const dictionary = [
  'are',
  'art',
  'felt',
  'fire',
  'fit',
  'flute',
  'pin',
  'ping',
  'pint',
  'pit',
  'rite',
  'sing',
  'spite',
  'quesadilla', //not on board
  'quixotic' //not on board
]

const wordsFound = []

// Loop through all possible starting points
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    const boardState = [
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false]
    ]

    const prefix = board[i][j];
    boardState[i][j] = true;
    checkDictionary(prefix, boardState, [i, j]);
  }
}

console.log('Board:');
console.log(board);

console.log('wordsFound:');
console.log(wordsFound);
