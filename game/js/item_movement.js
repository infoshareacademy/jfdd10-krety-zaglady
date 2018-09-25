var position = 0;
var itemSpeed = 3;
(function () {
  var board = document.querySelector('.level_window')
  var left = Math.floor(Math.random() * board.clientWidth);
  var item = document.createElement('div');

  board.appendChild(item);

  item.classList.add('item');

  
  item.style.left = left + 'px';
  console.log(left)

  setInterval(function () {
    position += itemSpeed;
    if (position >= 617) {
      position = 0;
      life += -1;
      document.querySelector(".life").innerHTML='LIFE: ' + life;
    }
    item.style.top = position + 'px';
  }, 16)
  item.classList.left = left;
  
})()
