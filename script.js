'use strict';
const grid = document.querySelector('.grid');
const whiteBtn = document.querySelector('.whiteBtn');
const blackBtn = document.querySelector('.blackBtn');
const randomBtn = document.querySelector('.randomBtn');
const resetBtn = document.querySelector('.resetBtn');
const sizeBtn = document.querySelector('.sizeBtn');
const sizeInput = document.querySelector('.input');

let currentMode = 'random'; // tracks which paint mode is active: 'random' | 'white' | 'black'

function createGrid(size) {
  grid.innerHTML = ''; // wipe previous grid before building a new one
  const squareSize = 480 / size; // scale each square so the total grid stays 480px regardless of size

  // Creating squares loop
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.opacity = '0'; // start invisible so it fades in as the user hovers
    square.addEventListener('mouseover', paintSquare);
    grid.appendChild(square);
  }
}

// Shared handler for every square; behavior branches on currentMode
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

resetBtn.addEventListener('click', function () {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = ''; // clear back to CSS default (transparent)
    square.style.opacity = '0'; // match createGrid's initial state
  });
});

sizeBtn.addEventListener('click', function () {
  const inputText = +sizeInput.value;
  if (!inputText || inputText > 100 || inputText < 1) {
    alert('Wrong input, try a number from 1 to 100');
  } else {
    createGrid(inputText);
  }
});
