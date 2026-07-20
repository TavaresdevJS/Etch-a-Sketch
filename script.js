'use strict';
const grid = document.querySelector('.grid');

function createGrid(size) {
  grid.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.opacity = '0';
    square.addEventListener('mouseover', function () {
      let currentOpacity = parseFloat(square.style.opacity);
      if (currentOpacity < 1.0) {
        square.style.opacity = (currentOpacity + 0.1).toString();
      }
    });
    grid.appendChild(square);
  }
}

createGrid(16);
