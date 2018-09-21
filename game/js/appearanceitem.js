var itemAppear = document.querySelector ('.item')
function appearanceItem() {
    var positionTop = itemAppear.offsetTop;
    console.log(positionTop);

    if (positionTop >= 200) {
        
        itemAppear.style.background = 'blue';
    }
    return;
};


setInterval (appearanceItem, 16)