var levelWindow = document.querySelector('.level_window');
var fruit = document.createElement('div');

levelWindow.appendChild(fruit);

fruit.classList.add('fruit');

var position = 0;

setInterval (function () {
  position += 1;
  fruit.style.marginTop = position + 'px';
}, 16)



