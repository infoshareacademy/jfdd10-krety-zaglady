var imageKret = document.querySelector('.kret');

window.addEventListener('scroll', function () {
    var screenOffset = window.scrollY;
    var kretOffset = screenOffset * 0.6;

    imageKret.style.marginRight = (1200 - kretOffset) + 'px';
})
