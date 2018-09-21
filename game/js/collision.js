(function () {
    var basket = document.querySelector('.basket');
    var basketPosition = parseInt(window.getComputedStyle(basket).getPropertyValue('left'));


    
    var item = document.querySelector('.item');




})()   
setInterval(function () {
    var basket = document.querySelector('.basket');
    var item = document.querySelector('.item');
    var basketPositionX = parseInt(window.getComputedStyle(basket).getPropertyValue('left'));
    var basketPositionY = parseInt(window.getComputedStyle(basket).getPropertyValue('bottom'));
    var basketRadius = parseInt(window.getComputedStyle(basket).getPropertyValue('width')) / 2;
    
    var basketCenter = {
        x: basketPositionX + basketRadius,
        y: parseInt(window.getComputedStyle(basket).getPropertyValue('top')) + basketRadius
    }
    var itemCenter = {
        x: enemyPosition + enemyRadius,
        y: parseInt(window.getComputedStyle(enemy).getPropertyValue('top')) + enemyRadius
    }

    var b = itemCenter.x - basketCenter.x;
    var a = itemCenter.y - basketCenter.y;
    var c = Math.sqrt(a * a + b * b);
    if (c <= enemyRadius + basketRadius) {
        return;
    }
    enemyPosition -= 1;
    enemy.style.left = enemyPosition + 'px';

    if (enemyPosition < 0 - enemyRadius * 2) {
        var randomY = 10 + Math.random() * 90;
        enemy.style.top = randomY + 'px';
        enemyPosition = document.querySelector('.board').offsetWidth
    }
    basketPositionX += pressedKeys.ArrowRight === true ? 1 : 0;
    basketPositionX -= pressedKeys.ArrowLeft === true ? 1 : 0;

    basketPositionY += pressedKeys.ArrowDown === true ? 1 : 0;
    basketPositionY -= pressedKeys.ArrowUp === true ? 1 : 0;

    player.style.left = basketPositionX + 'px';
    player.style.top = basketPositionY + 'px';
}, 16);