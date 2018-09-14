//sun
var deviceNode = document.querySelector('.hero-tlo1');

window.addEventListener('scroll', function () {
  var screenOffset = window.scrollY;
  var deviceOffset = screenOffset * 0.5;
  deviceNode.style.top = (0 + deviceOffset) + 'px';
  deviceNode.style.left = (300 - deviceOffset) + 'px';
})
//clouds
var deviceNode2 = document.querySelector('.hero-tlo2');

window.addEventListener('scroll', function () {
    var screenOffset = window.scrollY;
    var deviceOffset = screenOffset * 0.5;
    deviceNode2.style.backgroundPosition = '0px -'+( 0 + deviceOffset) + 'px';
    // deviceNode.style.left = (-100 - deviceOffset) + 'px';
  })