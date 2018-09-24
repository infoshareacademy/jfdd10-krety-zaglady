// Co 16ms:
// - Przesuwam owoca
// - Przesuwam koszyk
// - Sprawdzam czy koszyk koliduje z owocem
// - Jeżeli koliduje to zliczam punkt i losuję nową pozycję owoca
// - Jeżeli zderza się z ziemią, to losuję nową pozycję owoca i odejmuję życie
// - Jeżeli skończyły mi się życia, to umieram

function moveFruit(fruit) {

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

function outOfBounds(a) {

}

function play() {
    // - Utworzyć owoca w losowej pozycji na planszy
    // - Znaleźć koszyk i ustawić go na środku planszy
    // var basket = ......
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