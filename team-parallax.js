
// Gdy scroll będzie na pozycji "#team" nadaj klasę "active" zdjęciom w sekcji team

//1. znajdź zdjęcia i pozycję #team
var image = document.querySelectorAll('.team-member .picture');
//var teamSection = document.querySelector('#team');


window.addEventListener('scroll', function(){
    var screenOffset = window.scrollY;
    if (screenOffset > 886){
        image[0].classList.add('Ola-true');
    } 
    
})
//2. 