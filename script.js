'use strict';
const grid = document.querySelector('.grid');
const whiteBtn = document.querySelector('.whiteBtn');
const blackBtn = document.querySelector('.blackBtn');
const randomBtn = document.querySelector('.randomBtn');
const resetBtn = document.querySelector('.resetBtn');
const sizeBtn = document.querySelector('.sizeBtn');
const sizeInput = document.querySelector('.input');

let currentMode = 'random';

function createGrid(size) {
  // Clear existing squares
  grid.innerHTML = '';
  const squareSize = 480 / size;

  // Creating squares loop
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.opacity = '0';
    square.addEventListener('mouseover', paintSquare);
    grid.appendChild(square);
  }
}

const paintSquare = function (e) {
  let currentOpacity = parseFloat(e.target.style.opacity);
  if (currentMode === 'random') {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  } else if (currentMode === 'white') {
    e.target.style.backgroundColor = 'white';
  } else if (currentMode === 'black') {
    e.target.style.backgroundColor = 'black';
  }
  if (currentOpacity < 1.0) {
    e.target.style.opacity = (currentOpacity + 0.1).toString();
  }
};

whiteBtn.addEventListener('click', function () {
  currentMode = 'white';
});

blackBtn.addEventListener('click', function () {
  currentMode = 'black';
});

randomBtn.addEventListener('click', function () {
  currentMode = 'random';
});

sizeBtn.addEventListener('click', function () {
  const inputText = +sizeInput.value;
  if (!inputText || inputText > 100 || inputText < 1) {
    alert('Wrong input, try a number from 1 to 100');
  } else {
    createGrid(inputText);
  }
});
