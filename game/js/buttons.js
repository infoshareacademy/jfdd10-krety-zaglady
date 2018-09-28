function introScreenAppears() {
    var introScreen = document.querySelector('.introScreen');
    introScreen.style.display = 'block';
}

function endScreenAppears() {
    var endScreen = document.querySelector('.endScreen');
    endScreen.style.display = 'block';
}

function stopGame() {
    clearInterval(id)
    var items = document.querySelectorAll('.item')
    items.forEach(function (item) {
        item.remove()
    })
    endScreenAppears()
}

introScreenAppears()

window.addEventListener('click', function (event) {

    if (event.target.classList.contains('button')) {
        var introScreen = document.querySelector('.introScreen');
        var endScreen = document.querySelector('.endScreen');
        introScreen.style.display = 'none';
        endScreen.style.display = 'none';
        life = 3;
        score = 0;
        play();
    }
})


// setTimeout(function () {
//     endScreenAppears()
//     stopGame()
// }, 3000)