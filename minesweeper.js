const grid = [];

//minesweeper board
const board = document.querySelector('#board');
console.log(board);
const cells = Array.from({ length: 9 }, (_, i) => {
  console.log(i);
  const cell = document.createElement('div');
  cell.textContent = i + 1;
  board.appendChild(cell);
});
