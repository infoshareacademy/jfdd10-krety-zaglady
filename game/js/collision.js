setInterval(function () {
    var playerCenter = {
      x: playerPositionX + playerRadius,
      y: parseInt(window.getComputedStyle(player).getPropertyValue('top')) + playerRadius
    }
    var enemyCenter = {
      x: enemyPosition + enemyRadius,
      y: parseInt(window.getComputedStyle(enemy).getPropertyValue('top')) + enemyRadius
    }

    var b = enemyCenter.x - playerCenter.x;
    var a = enemyCenter.y - playerCenter.y;
    var c = Math.sqrt(a * a + b * b);
    if (c <= enemyRadius + playerRadius) {
      return;
    }
    enemyPosition -= 1;
    enemy.style.left = enemyPosition + 'px';

    if (enemyPosition < 0 - enemyRadius * 2) {
      var randomY = 10 + Math.random() * 90;
      enemy.style.top = randomY + 'px';
      enemyPosition = document.querySelector('.board').offsetWidth
    }
    playerPositionX += pressedKeys.ArrowRight === true ? 1 : 0;
    playerPositionX -= pressedKeys.ArrowLeft === true ? 1 : 0;

    playerPositionY += pressedKeys.ArrowDown === true ? 1 : 0;
    playerPositionY -= pressedKeys.ArrowUp === true ? 1 : 0;

    player.style.left = playerPositionX + 'px';
    player.style.top = playerPositionY + 'px';
  }, 16);