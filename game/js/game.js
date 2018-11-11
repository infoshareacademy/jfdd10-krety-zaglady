// Co 16ms:
// - Przesuwam owoca
// - Przesuwam koszyk
// - Sprawdzam czy koszyk koliduje z owocem
// - Jeżeli koliduje to zliczam punkt i losuję nową pozycję owoca
// - Jeżeli zderza się z ziemią, to losuję nową pozycję owoca i odejmuję życie
// - Jeżeli skończyły mi się życia, to umieram\
var keyPressed
var id;
var highScore = 0
var score = 0;
var life = 3;
var speed = 10;
var itemSpeed = 3;
const board = document.querySelector('.level_window')
const basket = document.querySelector('.basket');
function keyPressedHappened() {
  window.addEventListener('keydown', function (event) {
    keyPressed = event.code;
    event.preventDefault();
  })
  window.addEventListener('keyup', function (event) {
    keyPressed = false;
  });
}

function checkHighScore() {
  var highScoreDiv = document.querySelector(".hot_key")
  if (highScore > score) {
    return;
  }
  highScore = score;
  highScoreDiv.innerHTML = "REKORD: " + highScore;
  return highScore;
}

function moveItem(item) {
  var position = parseFloat(window.getComputedStyle(item).top);
  position += itemSpeed;
  item.style.top = position + 'px';
}

function moveBasket(basket) {
  var velocity = 0;
  var position = parseFloat(window.getComputedStyle(basket).left);

  if (keyPressed) {
    if (keyPressed === 'ArrowLeft') {
      velocity = -speed;
    } else if (keyPressed === 'ArrowRight') {
      velocity = speed;
    } else {
      return false;
    }
  } else {
    return false;
  }
  position = Math.min(Math.max(0, position + velocity), board.clientWidth - 80);
  basket.style.left = position + 'px';
}

function elementToPosition(element) {

  var elementPosition = parseInt(window.getComputedStyle(element).getPropertyValue('top'));
  var elementRadius = parseInt(window.getComputedStyle(element).getPropertyValue('height')) / 2;

  var elementCenter = {
    x: parseInt(window.getComputedStyle(element).getPropertyValue('left')) + elementRadius,
    y: elementPosition + elementRadius,
    radius: elementRadius
  }
  return elementCenter;
}
/**
 * Should return true/false
 * 
 * @param {x: number, y: number, radius: number} a 
 * @param {x: number, y: number, radius: number} b 
 */
function collides(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  var hypot = Math.sqrt(dx * dx + dy * dy);
  if (hypot <= a.radius + b.radius) {
    return true;
  }
  return false;
}

var height;

function updateSize() {
  height = document.querySelector('.level_window').clientHeight
}

window.addEventListener('resize', updateSize )
updateSize()

function outOfBounds(position) {
  if (position >= height) {    
    return true;
  }
}

function play() {

  // - Znaleźć koszyk i ustawić go na środku planszy
  basket.style.left = (0.95*(board.clientWidth) / 2) + "px";
  var items = []
  itemSpeed = 3;
  keyPressedHappened()
  

  // - Utworzyć owoca w losowej pozycji na planszy
  function createFruit() {

    var item = document.createElement('div');
    board.appendChild(item);
    var left = Math.max(Math.floor(Math.random() * (board.clientWidth - 40)), 0);
    item.classList.add('item');
    item.style.left = left + "px";

    items.push(item);
    return item;

  }

  changeColor(createFruit())
  setTimeout(function () {
    changeColor(createFruit())
  }, 1000)



  function changeColor(element) {
    var randomFruit = Math.floor(Math.random() * 3);
    var fruiTs = ["fruit1", "fruit2", "fruit3"];

    if (fruiTs[randomFruit] === "fruit1") {
      element.classList.remove("fruit2");
      element.classList.remove("fruit3");
      element.classList.add("fruit1");
    }

    if (fruiTs[randomFruit] === "fruit2") {
      element.classList.remove("fruit1");
      element.classList.remove("fruit3");
      element.classList.add("fruit2");
    }

    if (fruiTs[randomFruit] === "fruit3") {
      element.classList.remove("fruit1");
      element.classList.remove("fruit2");
      element.classList.add("fruit3");
    }
  }



  id = setInterval(function () {
    moveBasket(basket);
    items.forEach(function (item) {
      moveItem(item);
      var position = parseFloat(window.getComputedStyle(item).top);
      if (outOfBounds(position)) {
        var left = Math.max(Math.floor(Math.random() * (board.clientWidth - 40)), 0);
        item.style.left = left + 'px';
        item.style.top = '0px';
        life -= 1;
        document.querySelector(".life").innerHTML = 'ŻYCIE: ' + life;
        if (life < 1) {
          stopGame();
        }
        changeColor(item);
      }

      if (collides(elementToPosition(basket), elementToPosition(item))) {
        left = Math.max(Math.floor(Math.random() * (board.clientWidth - 40)), 0);
        item.style.left = left + 'px';
        item.style.top = '0px'
        score += 1;
        document.querySelector(".score").innerHTML = 'WYNIK: ' + score;
        changeColor(item);
        nextLevel()
      }
    })

  }, 16);
}

function nextLevel() {
  if (score >= 10 && score < 20) {
    itemSpeed = 4;
  }
  if (score >= 20) {
    itemSpeed = 5;
    speed = 13
  }
}
