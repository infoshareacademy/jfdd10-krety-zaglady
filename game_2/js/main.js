var position = 350;
var velocity = 0;
var player = document.querySelector('.triangle');
var dTime = 16;
var keyPressed = false;

window.addEventListener('keydown', function (event) {
    keyPressed = event.code;
});
window.addEventListener('keyup', function (event) {
    keyPressed = false;
});
setInterval(function () {
    if (keyPressed) {
        if (keyPressed === 'ArrowLeft') {
            velocity = -4;
        } else if (keyPressed === 'ArrowRight') {
            velocity = 4;
        } else {
            return false;
        }
    } else {
        return false;
    }
    console.log(parseInt(position), parseInt(velocity));
    // position = Math.min(Math.max(0, position + velocity), 940 - 80);
    position = Math.min(740, Math.max(10, position + velocity));
    player.style.left = position + 'px';
}, dTime)

// addEventListener("keydown",function(event) {console.log(event.key)})