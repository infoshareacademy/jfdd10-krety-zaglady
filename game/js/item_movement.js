
(function () {
  var position = 0;
  var board = document.querySelector('.level_window')
  var left = Math.floor(Math.random() * board.clientWidth);

  var item = document.createElement('div');

  board.appendChild(item);

  item.classList.add('item');


  setInterval(function () {
    position += 10;
    if (position >= 617) {
      position = 0;
      left = Math.floor(Math.random() * board.clientWidth);
    }
    item.style.top = position + 'px';
    item.style.left = left + 'px';
  }, 16)
})()
