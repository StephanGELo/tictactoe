

function createBoard(board) {

  console.log(`
    **************
    |${board.A1} | ${board.B1} | ${board.C1}|
    ****|****|****
        |    |
    |${board.A2} | ${board.B2} | ${board.C2}|
    ****|****|****
        |    |
    |${board.A3} | ${board.B3} | ${board.C3}|
    **************
  `);
}

function playTicTacToe(game) {

  var board = {
    A1: 'A1',
    A2: 'A2',
    A3: 'A3',
    B1: 'B1',
    B2: 'B2',
    B3: 'B3',
    C1: 'C1',
    C2: 'C2',
    C3: 'C3'
  };
  var tokens = {'1': ' X', '2': ' O'};


  createBoard(board);

}