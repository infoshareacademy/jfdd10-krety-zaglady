(function () {



    var intervalId = setInterval(function () {

        var basket = document.querySelector('.basket');
        var basketPosition = parseInt(window.getComputedStyle(basket).getPropertyValue('top'));
        var basketRadius = parseInt(window.getComputedStyle(basket).getPropertyValue('height')) / 2;

        var item = document.querySelector('.item');
        var itemPosition = parseInt(window.getComputedStyle(item).getPropertyValue('top'));
        var itemRadius = parseInt(window.getComputedStyle(item).getPropertyValue('height')) / 2;

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
        if (c <= itemRadius + basketRadius) {
            position = 0;
            left = Math.floor(Math.random() * board.clientWidth);
            console.log('MAMY KOLIZJĘ');
            return;
        }
    }, 16);

})()