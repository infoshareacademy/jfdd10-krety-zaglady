var position = 0;
(function () {
  var board = document.querySelector('.level_window')
  var left = Math.floor(Math.random() * board.clientWidth);
  var item = document.createElement('div');

  board.appendChild(item);

  item.classList.add('item');

  
  item.style.left = left + 'px';
  console.log(left)


  setInterval(function () {
    position += 4;
    item.style.top = position + 'px';
  }, 16)
})()


