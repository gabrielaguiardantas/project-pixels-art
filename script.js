function randomBgColor() {
  const x = Math.random() * 255;
  const y = Math.random() * 255;
  const z = Math.random() * 255;
  const bgColor = `rgb(${x},${y},${z})`;
  return bgColor;
} randomBgColor();

const target = document.getElementsByClassName('color');
const button = document.getElementById('button-random-color');

function qualquer() {
  for (let i = 1; i < target.length; i += 1) {
    const backgroundColor = randomBgColor();
    target[i].style.backgroundColor = backgroundColor;
    target[i].style.color = backgroundColor;
  }
}
function randomColors() {
  button.addEventListener('click', qualquer);
} randomColors();
