function randomColors() {
  const target = document.getElementsByClassName('color');
  const button = document.getElementsByTagName('button');
  for (let i = 1; i < target.length; i += 1) {
    target[i].style.backgroundColor = rgb((parseInt(Math.random() * 255)), (parseInt(Math.random() * 255)), (parseInt(Math.random() * 255)));
    target[i].style.color = rgb((parseInt(Math.random() * 255)), (parseInt(Math.random() * 255)), (parseInt(Math.random() * 255)));
  }

} //(parseInt(Math.random() * 255)) número aleatório para jogar no rgb.
