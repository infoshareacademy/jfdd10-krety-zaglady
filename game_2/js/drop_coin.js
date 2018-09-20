function moveCoins () {
    var element = addCoin()
    var position = 0;
    setInterval(function () {
      position += 1;
      element.style.top = position + 'px';
    }, 16)
    // element.style.top = '10px';
}
moveCoins();