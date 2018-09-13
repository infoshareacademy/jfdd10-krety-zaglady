
// Gdy scroll będzie na pozycji "#team" nadaj klasę "active" zdjęciom w sekcji team

//1. znajdź zdjęcia i pozycję #team
var images = document.querySelectorAll('.team-member .picture');

//2. Jeśli jesteśmy 
window.addEventListener('scroll', function(){
    var screenOffset = window.scrollY;
    var target = document.querySelector('#team')

    if (screenOffset > target.offsetTop -window.innerHeight/2){
        images.forEach(function(image){
            image.classList.add('true')   
        })
        //images[0].classList.add('Ola-true');
        //images[1].classList.add('Balbina-true');
        //images[2].classList.add('Lukasz-true');
        //images[3].classList.add('Monika-true');
    } 
    
})