// Co 16ms:
// - Przesuwam owoca
// - Przesuwam koszyk
// - Sprawdzam czy koszyk koliduje z owocem
// - Jeżeli koliduje to zliczam punkt i losuję nową pozycję owoca
// - Jeżeli zderza się z ziemią, to losuję nową pozycję owoca i odejmuję życie
// - Jeżeli skończyły mi się życia, to umieram\
var keyPressed
var id;
var score = 0;
var life = 3;
var speed = 5;
var itemSpeed = 3;
function keyPressedHappened() {
  window.addEventListener('keydown', function (event) {
    keyPressed = event.code;
  })
  window.addEventListener('keyup', function (event) {
    keyPressed = false;
  });
}

var fruiTs = ["fruit1", "fruit2", "fruit3"];

//console.log(randomFruit);
//console.log(fruiTs[randomFruit]);




function moveItem(item) {
  var position = parseFloat(window.getComputedStyle(item).top);
  position += itemSpeed;
  item.style.top = position + 'px';
}

function moveBasket(basket) {
  var velocity = 0;
  var position = parseFloat(window.getComputedStyle(basket).left);

  if (keyPressed) {
    if (keyPressed === 'KeyZ') {
      velocity = -speed;
    } else if (keyPressed === 'KeyM') {
      velocity = speed;
    } else {
      return false;
    }
  } else {
    return false;
  }
  position = Math.min(Math.max(0, position + velocity), 940 - 80);
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

function outOfBounds(position) {
  if (position >= 617) {
    return true;
  }
}

function play() {

  // - Znaleźć koszyk i ustawić go na środku planszy
  var board = document.querySelector('.level_window')
  var basket = document.querySelector('.basket');
  basket.style.left = "430px"
  var items = []
  keyPressedHappened()

  // - Utworzyć owoca w losowej pozycji na planszy
  function createFruit() {

    var item = document.createElement('div');
    board.appendChild(item);
    var left = Math.floor(Math.random() * (board.clientWidth - elementToPosition(item).radius * 2) );
    console.log(left);
    item.classList.add('item');
    item.style.left = left + "px";
    
    items.push(item);
    return item;

  }

  changeColor(createFruit())
  changeColor(createFruit())
  changeColor(createFruit())

  function changeColor(element) {
    var randomFruit = Math.floor(Math.random() * fruiTs.length );

  if(fruiTs[randomFruit] === "fruit1") {
    element.classList.add("fruit1");
    }
    
    if(fruiTs[randomFruit] === "fruit2") {
      element.classList.add("fruit2");
    }
    
    
    if(fruiTs[randomFruit] === "fruit3") {
      element.classList.add("fruit3");
    }
  }



  id = setInterval(function () {
    moveBasket(basket);
    items.forEach(function (item) {
      moveItem(item);
      var position = parseFloat(window.getComputedStyle(item).top);
      if (outOfBounds(position)) {
        var left = Math.floor(Math.random() * board.clientWidth);
        item.style.left = left + 'px';
        item.style.top = '0px';
        life -= 1;
        document.querySelector(".life").innerHTML = 'LIFE: ' + life;
        if (life < 1) {
          stopGame();
        }
        changeColor(item);
      }
  
      if (collides(elementToPosition(basket), elementToPosition(item))) {
        left = Math.floor(Math.random() * board.clientWidth);
        item.style.left = left + 'px';
        item.style.top = '0px';
        console.log('MAMY KOLIZJĘ');
        score += 1;
        document.querySelector(".scoore").innerHTML = 'PUNKTY: ' + score;
        changeColor(item);
      }
    })
    
  }, 16);
}



//------------------------------------------------------------------------------------

// (function () {
//     var position = 430;
//     var velocity = 0;
//     var player = document.querySelector('.basket');
//     var goLeft = false;
//     var goRight = false;
//     var dTime = 16;
//     var keyPressed = false;
//     window.addEventListener('keydown', function (event) {
//         keyPressed = event.code;
//     })
//     window.addEventListener('keyup', function (event) {
//         keyPressed = false;
//     });
//     setInterval(function () {
//         if (keyPressed) {
//             if (keyPressed === 'KeyZ') {
//                 velocity = -1;
//             } else if (keyPressed === 'KeyM') {
//                 velocity = 1;
//             } else {
//                 return false;
//             }
//         } else {
//             return false;
//         }
//         console.log(position, velocity)

//         position = Math.min(Math.max(0, position + velocity), 940 - 80);
//         player.style.left = position + 'px';
//     }, dTime)
// })()