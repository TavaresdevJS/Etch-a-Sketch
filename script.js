'use strict';
const grid = document.querySelector('.grid');
const sizeBtn = document.querySelector('.sizeBtn');
const sizeInput = document.querySelector('.input');

function createGrid(size) {
  grid.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.opacity = '0';
    square.addEventListener('mouseover', function () {
      let currentOpacity = parseFloat(square.style.opacity);
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      if (currentOpacity < 1.0) {
        square.style.opacity = (currentOpacity + 0.1).toString();
      }
    });
    grid.appendChild(square);
  }
}

sizeBtn.addEventListener('click', function () {
  const inputText = +sizeInput.value;
  if (!inputText || inputText > 100 || inputText < 1) {
    alert('Wrong input, try a number from 1 to 16');
  } else {
    createGrid(inputText);
  }
});
