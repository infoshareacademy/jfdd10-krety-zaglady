function introScreenAppears() {
    var introScreen = document.querySelector('.introScreen');
    introScreen.style.display = 'flex';
    basket.style.left = (0.95*(board.clientWidth) / 2) + "px";
}

function endScreenAppears() {
    var endScreen = document.querySelector('.endScreen');
    endScreen.style.display = 'flex';
}

function stopGame() {
    clearInterval(id);
    checkHighScore();
    var items = document.querySelectorAll('.item');
        items.forEach(function (item) {
        item.remove()
    });
    endScreenAppears();
    var endScore = document.querySelector('.endScore');
    endScore.innerText = "Twój wynik: " + score;
}

function resetScoreAndLife() {
    life = 3
    document.querySelector('.life').innerHTML = 'ŻYCIE: ' + life;
    score = 0
    document.querySelector('.score').innerHTML =  'WYNIK: ' + score;
}

introScreenAppears()

window.addEventListener('click', function (event) {

    if (event.target.classList.contains('button')) {
        var introScreen = document.querySelector('.introScreen');
        var endScreen = document.querySelector('.endScreen');
        introScreen.style.display = 'none';
        endScreen.style.display = 'none';
        resetScoreAndLife();
        play();
    }
})


// setTimeout(function () {
//     endScreenAppears()
//     stopGame()
// }, 3000)