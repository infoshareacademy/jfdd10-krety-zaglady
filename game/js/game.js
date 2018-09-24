// Co 16ms:
// - Przesuwam owoca
// - Przesuwam koszyk
// - Sprawdzam czy koszyk koliduje z owocem
// - Jeżeli koliduje to zliczam punkt i losuję nową pozycję owoca
// - Jeżeli zderza się z ziemią, to losuję nową pozycję owoca i odejmuję życie
// - Jeżeli skończyły mi się życia, to umieram

function moveFruit(fruit) {
    var position = 0;
    position += 10;
    item.style.top = position + 'px';
}

function moveBasket(basket) {

}

/**
 * Should return true/false
 * 
 * @param {x: number, y: number} a 
 * @param {x: number, y: number} b 
 */
function collides(a, b) {

}

function outOfBounds(position) {
    if (position >= 617) {
        return true;
    }
}

function play() {
    // - Utworzyć owoca w losowej pozycji na planszy
    // - Znaleźć koszyk i ustawić go na środku planszy
    // var basket = ......
    var basket = document.querySelector('.basket');
    var basketPosition = parseInt(window.getComputedStyle(basket).getPropertyValue('top'));
    var item = document.createElement('div');
    board.appendChild(item);
    item.classList.add('item');


    setInterval(function () {
        // moveBasket(basket);
    }, 16);
}

play();



(function () {
    var position = 430;
    var velocity = 0;
    var player = document.querySelector('.basket');
    var goLeft = false;
    var goRight = false;
    var dTime = 16;
    var keyPressed = false;
    window.addEventListener('keydown', function (event) {
        keyPressed = event.code;
    })
    window.addEventListener('keyup', function (event) {
        keyPressed = false;
    });
    setInterval(function () {
        if (keyPressed) {
            if (keyPressed === 'KeyZ') {
                velocity = -1;
            } else if (keyPressed === 'KeyM') {
                velocity = 1;
            } else {
                return false;
            }
        } else {
            return false;
        }
        console.log(position, velocity)

        position = Math.min(Math.max(0, position + velocity), 940 - 80);
        player.style.left = position + 'px';
    }, dTime)
})()