var featureImages = document.querySelectorAll('.feature-item-picture');
var headingsBottom = document.querySelectorAll('.feature-item-text');
var headingsTop = document.querySelectorAll('.feature-item-picture h2');
var featureTexts = document.querySelectorAll('.feature-item-picture p');

var features = [featureImages, headingsBottom, headingsTop, featureTexts]
var i

featureImages[0].addEventListener('click', function () {
    featureImages[0].classList.add('active');
    headingsBottom[0].classList.add('active');
    headingsTop[0].classList.add('active');
    featureTexts[0].classList.add('active');
})
    //for (var i = 0; i < 4; i += 1){
    //    features.forEach(function(feature){
    //    feature[i].classList.add('active')})
    //}
    
    
    //features.forEach(function(feature){
    //feature.classList.add('active')
    //})