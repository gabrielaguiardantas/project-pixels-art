function randomBgColor() {
  const x = Math.random() * 255;
  const y = Math.random() * 255;
  const z = Math.random() * 255;
  const bgColor = `rgb(${x},${y},${z})`;
  return bgColor;
} randomBgColor();

const target = document.getElementsByClassName('color');
const button = document.getElementById('button-random-color');

function paintBoxes() {
  let saveBackgroundColors = [];
  for (let i = 1; i < target.length; i += 1) {
    const backgroundColor = randomBgColor();
    target[i].style.backgroundColor = backgroundColor;
    target[i].style.color = backgroundColor;
    saveBackgroundColors += target[i].style.backgroundColor;
    localStorage.setItem('colorPalette', saveBackgroundColors);
  }
} paintBoxes();
function randomColors() {
  button.addEventListener('click', paintBoxes);
} randomColors();

// function retrieveBackgroundInfos() {
//  localStorage.getItem('colorPalette') = target.style.backgroundColor;
// }retrieveBackgroundInfos();

function selectedBoxes(event) {
  const boxElement = document.querySelector('.selected');
  boxElement.classList.remove('selected');
  event.target.classList.add('selected');
}
target[0].addEventListener('click', selectedBoxes);
target[1].addEventListener('click', selectedBoxes);
target[2].addEventListener('click', selectedBoxes);
target[3].addEventListener('click', selectedBoxes);

function paintBox() {
  document.getElementsByClassName('color selected')[0].style.backgroundColor = document.querySelector('.pixel');
}
document.getElementsByClassName('pixel')[0].addEventListener('click', paintBox);
