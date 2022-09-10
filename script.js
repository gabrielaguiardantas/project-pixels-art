const clearButton = document.querySelector('#clear-board');
const box1 = document.getElementsByClassName('color')[0];
const box2 = document.getElementsByClassName('color')[1];
const box3 = document.getElementsByClassName('color')[2];
const box4 = document.getElementsByClassName('color')[3];
const color = document.getElementsByClassName('color');
const button = document.getElementById('button-random-color');
const pixel = document.getElementsByClassName('pixel');
const input = document.querySelector('#board-size');
const pixelBoard = document.querySelector('#pixel-board');
const vqvButton = document.getElementById('generate-board');

box1.style.backgroundColor = 'black';
box2.style.backgroundColor = 'rgb(0, 150, 152)';
box3.style.backgroundColor = 'rgb(237, 222, 164)';
box4.style.backgroundColor = 'rgb(247, 160, 114)';

function localStorageInit() {
  const arrayEmpty = [];
  const pixelEmpty = [];
  if (localStorage.length < 1) {
    for (let i = 1; i < color.length; i += 1) {
      arrayEmpty.push(color[i].style.backgroundColor);
      localStorage.setItem('colorPalette', JSON.stringify(arrayEmpty));
    }
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white';
      pixelEmpty.push(pixel[i].style.backgroundColor);
      localStorage.setItem('pixelBoard', JSON.stringify(pixelEmpty));
    }
  }
} localStorageInit();

function randomBgColor() {
  const x = Math.random() * 255;
  const y = Math.random() * 255;
  const z = Math.random() * 255;
  const bgColor = `rgb(${x},${y},${z})`;
  return bgColor;
}

function paintBoxes() {
  const saveBackgroundColors = [];
  for (let i = 1; i < color.length; i += 1) {
    const backgroundColor = randomBgColor();
    color[i].style.backgroundColor = backgroundColor;
    saveBackgroundColors.push(color[i].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(saveBackgroundColors));
}

function retrieveBackgroundInfos() {
  if (localStorage.length > 0) {
    const saveBackground = JSON.parse(localStorage.getItem('colorPalette'));
    for (let i = 1; i < color.length; i += 1) {
      color[i].style.backgroundColor = saveBackground[i - 1];
    }
  }
}

function selectedBoxes(event) {
  const boxElement = document.querySelector('.selected');
  boxElement.classList.remove('selected');
  event.target.classList.add('selected');
}

function arrayPixelPaint(event) {
  const savePixelBoardInfo = [];
  const obj = document.getElementsByClassName('color selected')[0].style.backgroundColor;
  event.target.style.backgroundColor = obj;
  for (let i = 0; i < pixel.length; i += 1) {
    savePixelBoardInfo.push(pixel[i].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(savePixelBoardInfo));
}

function clearBoard() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

function retrievePixelBoardInfo() {
  if (localStorage.length > 0) {
    const saveBoard = JSON.parse(localStorage.getItem('pixelBoard'));
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = saveBoard[i];
    }
  }
}

function boardSize() {
  if (input.value === '') {
    alert('Board Inválido!');
  }
  if (input.value ** 2 > pixel.length) {
    const newLi = document.createElement('li');
    pixelBoard.appendChild(newLi);
    newLi.className = 'pixel';
    const newBoardSize = document.getElementsByClassName('pixel');
  }
}

vqvButton.addEventListener('click', boardSize);
color[0].addEventListener('click', selectedBoxes);
color[1].addEventListener('click', selectedBoxes);
color[2].addEventListener('click', selectedBoxes);
color[3].addEventListener('click', selectedBoxes);
button.addEventListener('click', paintBoxes);
clearButton.addEventListener('click', clearBoard);
for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', arrayPixelPaint);
}
window.onload = function qualquer() {
  retrieveBackgroundInfos();
  retrievePixelBoardInfo();
};
