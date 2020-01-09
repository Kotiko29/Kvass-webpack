import style from './src/assets/style/index.styl'; // импорт стилей

/*var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);
 
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
*/
$(document).ready(function(){
    $('.menu-trigger').click(function(){
        $('.main-header-navigation').slideToggle(500);
    });
   

});
