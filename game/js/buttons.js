function introScreenAppears() {
    var introScreen = document.querySelector('.introScreen');
    introScreen.style.display = 'block';
}

introScreenAppears()

window.addEventListener('click', function (event) {
    
    if (event.target.classList.contains('button')) {
        var introScreen = document.querySelector('.introScreen');
        introScreen.style.display = 'none';
        play();
    }
})
