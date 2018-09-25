var speed = 5;

(function () {
var position = 430;
var velocity = 0;
var player = document.querySelector('.basket');
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
            velocity = -speed;
        } else if (keyPressed === 'KeyM') {
            velocity = speed;
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