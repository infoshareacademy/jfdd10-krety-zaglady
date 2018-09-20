function moveCoins() {
  var element = addCoin()
  var position = 0;
  // var coinLeft = document.querySelector('.coin').offsetLeft;
  // var triangleHeight = document.querySelector('.triangle').offsetTop;
  // var triangleLeft = document.querySelector('.triangle').offsetLeft;
  setInterval(function () {
    position += 1;
    element.style.top = position + 'px';
    if ((document.querySelector('.coin').offsetTop) >= (document.querySelector('.triangle').offsetTop) && (document.querySelector('.coin').offsetLeft) >= (document.querySelector('.triangle').offsetLeft)) {
      element.style.background = 'transparent';
      element.remove;
      return;
    }
    console.log(document.querySelector('.coin').offsetTop);
  }, 16)
  // element.style.top = '10px';
}
moveCoins();
