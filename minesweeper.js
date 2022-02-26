//minesweeper board
let canvas = document.querySelector('#canvas');
let cols = 9;
let rows = 9;
let size = 24;

let cells = new Map([
  ['0-0', 1],
  ['0-1', 1],
  ['1-0', 1],
  ['1-1', 1],
]);
let revealedKeys = new Set();

function toKey(row, col) {
  return row + '-' + col;
}

function createButtons() {
  canvas.style.width = rows * size + 'px';
  canvas.style.height = cols * size + 'px';
  canvas.style.margin = '0 auto';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let btn = document.createElement('button');
      btn.style.width = size + 'px';
      btn.style.height = size + 'px';
      let key = toKey(i, j);
      canvas.appendChild(btn);
    }
  }
}

function updateButtons() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let key = toKey(i, j);
      let cell = cells.get(key);
      if (revealedKeys.has(key)) {
        // do something
        cell.disabled = true;
      } else {
        cell.disabled = false;
        cell.textContent = '';
      }
    }
  }
}

createButtons();
