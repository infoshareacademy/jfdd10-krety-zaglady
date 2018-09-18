        // ZMIENNE
        var position = 0;
        var velocity = 0;
        var player = document.querySelector('.basket');
        var goLeft = false;
        var goRight = false;
        var basketWalkL = 0;
        var basketWalkR = 0;
        // PREDKOSC
        var dTime = 2;
        // STEROWANIE
        window.addEventListener('keydown', function (event) {
                if (event.code === 'KeyZ') {
                goLeft = true;
                if (event.code === 'KeyM') {
                    goRight = true;
                }
            }
            window.addEventListener('keyup', function (event) {
                if (event.code === 'KeyZ')
                    goLeft = false;
                if (event.code === 'KeyM') {
                    goRight = false;
                }
            });
            // FUNKCJE WYKONAWCZE LEWO
            setInterval(function () {
                if (goLeft) {
                    velocity = -1;
                }
                velocity = velocity * dTime,
                    0
            });
            setInterval(function () {
                if (goRight) {
                    velocity = 1;
                }
                velocity = velocity * dTime,
                    0
            });
            // setInterval(function () {
            //     if (goRight) {
            //         basketWalkR = 0.05;
            //     } else {
            //         basketWalkR = 0.05;
            //     }
            //     basketWalkR = basketWalkR * dTime,
            //         0
            // });
            console.log(velocity.toFixed(2));
            
            position += position + velocity * dTime;
            // Render new car position
            player.style.marginLeft = position + 'px';
        }, dTime)
             // FUNKCJE WYKONAWCZE PRAWO

             