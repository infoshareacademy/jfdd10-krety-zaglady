var imageKret = document.querySelector('.kret');
var imageJez = document.querySelector('.jez');

window.addEventListener('scroll', function () {
    var screenOffset = window.scrollY;
    var kretOffset = screenOffset * 0.5;
    var jezOffset = screenOffset * 0.5;

    imageKret.style.marginRight = (1200 - kretOffset) + 'px';
    imageJez.style.marginLeft = (1200 - deviceOffset) + 'px';
})
