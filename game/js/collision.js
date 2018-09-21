(function () {



    var intervalId = setInterval(function () {

        var basket = document.querySelector('.basket');
        var basketPosition = parseInt(window.getComputedStyle(basket).getPropertyValue('top'));
        var basketRadius = parseInt(window.getComputedStyle(basket).getPropertyValue('height')) / 2;

        //console.log({ basket, basketPosition, basketRadius })




        var item = document.querySelector('.item');
        var itemPosition = parseInt(window.getComputedStyle(item).getPropertyValue('top'));
        var itemRadius = parseInt(window.getComputedStyle(item).getPropertyValue('height')) / 2;

        //console.log({ item, itemPosition, itemRadius });

        var basketCenter = {
            y: basketPosition + basketRadius,
            x: parseInt(window.getComputedStyle(basket).getPropertyValue('left')) + basketRadius

        }

        var itemCenter = {
            y: itemPosition + itemRadius,
            x: parseInt(window.getComputedStyle(item).getPropertyValue('left')) + itemRadius
        }

        var b = itemCenter.y - basketCenter.y;
        var a = itemCenter.x - basketCenter.x;
        var c = Math.sqrt(a * a + b * b);
        //console.log(itemRadius, basketRadius);
        if (c <= itemRadius + basketRadius) {
            console.log('MAMY KOLIZJĘ');
            // clearInterval(intervalId);
            return;
        }
    }, 16);

})()
// setInterval(function () {    




//     enemyPosition -= 1;
//     enemy.style.left = enemyPosition + 'px';

//     if (enemyPosition < 0 - enemyRadius * 2) {
//         var randomY = 10 + Math.random() * 90;
//         enemy.style.top = randomY + 'px';
//         enemyPosition = document.querySelector('.board').offsetWidth
//     }
//     basketPositionX += pressedKeys.ArrowRight === true ? 1 : 0;
//     basketPositionX -= pressedKeys.ArrowLeft === true ? 1 : 0;

//     basketPositionY += pressedKeys.ArrowDown === true ? 1 : 0;
//     basketPositionY -= pressedKeys.ArrowUp === true ? 1 : 0;

//     player.style.left = basketPositionX + 'px';
//     player.style.top = basketPositionY + 'px';
// }, 16);