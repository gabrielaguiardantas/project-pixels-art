const box1 = document.getElementsByClassName('color')[0];
const box2 = document.getElementsByClassName('color')[1];
const box3 = document.getElementsByClassName('color')[2];
const box4 = document.getElementsByClassName('color')[3];
box1.style.backgroundColor = 'black';
box2.style.backgroundColor = 'rgb(0, 150, 152)';
box3.style.backgroundColor = 'rgb(237, 222, 164)';
box4.style.backgroundColor = 'rgb(247, 160, 114)';

function randomBgColor() {
  const x = Math.random() * 255;
  const y = Math.random() * 255;
  const z = Math.random() * 255;
  const bgColor = `rgb(${x},${y},${z})`;
  return bgColor;
}

const target = document.getElementsByClassName('color');
const button = document.getElementById('button-random-color');

function paintBoxes() {
  const saveBackgroundColors = [];
  for (let i = 1; i < target.length; i += 1) {
    const backgroundColor = randomBgColor();
    target[i].style.backgroundColor = backgroundColor;
    saveBackgroundColors.push(target[i].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(saveBackgroundColors));
}
button.addEventListener('click', paintBoxes);

function retrieveBackgroundInfos() {
  const saveBackground = JSON.parse(localStorage.getItem('colorPalette'));
  if (localStorage.length > 0) {
    for (let i = 1; i < target.length; i += 1) {
      target[i].style.backgroundColor = saveBackground[i - 1];
    }
  }
}

function selectedBoxes(event) {
  const boxElement = document.querySelector('.selected');
  boxElement.classList.remove('selected');
  event.target.classList.add('selected');
}
target[0].addEventListener('click', selectedBoxes);
target[1].addEventListener('click', selectedBoxes);
target[2].addEventListener('click', selectedBoxes);
target[3].addEventListener('click', selectedBoxes);

const trgt = document.getElementsByClassName('pixel');
function arrayPixelPaint(event) {
  const obj = document.getElementsByClassName('color selected')[0].style.backgroundColor;
  event.target.style.backgroundColor = obj;
}

for (let i = 0; i < trgt.length; i += 1) {
  trgt[i].addEventListener('click', arrayPixelPaint);
}
const clearButton = document.querySelector('#clear-board');

function clearBoard() {
  for (let i = 0; i < trgt.length; i += 1) {
    trgt[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearBoard);

window.onload = retrieveBackgroundInfos;
