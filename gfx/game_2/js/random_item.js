function randomPlace() {
    var random = Math.floor(Math.random() * 850);
    console.log(random)
    return random;
}

function addCoin() {
    var random = randomPlace()
    var newElement = document.createElement('div');
    newElement.style.left = random + 'px';
    newElement.style.top = '0px';
    newElement.className = 'coin';
    var mainWindow = document.querySelector('.game_window');
    mainWindow.appendChild(newElement);
    return newElement;
}



