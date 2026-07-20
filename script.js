'use strict';
const grid = document.querySelector('.grid');

function createGrid(size) {
  grid.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
  }
}
