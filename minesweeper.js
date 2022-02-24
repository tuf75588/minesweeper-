const grid = [];

//minesweeper board
const board = document.querySelector('#board');

for (let i = 0; i < 10; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.textContent = i;

  for (let j = 0; j < 9; j++) {
    const span = document.createElement('span');
    span.textContent = j + 1;
    cell.appendChild(span);
  }
  board.appendChild(cell);
}
