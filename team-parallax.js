
// Gdy scroll będzie na pozycji "#team" nadaj klasę "active" zdjęciom w sekcji team

//1. znajdź zdjęcia
var images = document.querySelectorAll('.team-member .picture');

//2. Gdy jesteśmy na pozycji 
window.addEventListener('scroll', function () {
    var screenOffset = window.scrollY;
    var target = document.querySelector('#team')

    if (screenOffset > target.offsetTop - window.innerHeight / 2) {
        images.forEach(function (image) {
            image.classList.add('true')
        })
    } else {
        images.forEach(function (image) {
            image.classList.remove('true')
        })
    }

})