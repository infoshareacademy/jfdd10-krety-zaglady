
var levelWindow = document.querySelector('.level_window');
var item = document.createElement('div');

levelWindow.appendChild(item);

item.classList.add('item');

var position = 0;

setInterval (function () {
  position += 4;
  item.style.top = position + 'px';
}, 16)



