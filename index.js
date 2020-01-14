/*jshint esversion: 6 */
import style from './src/assets/style/index.styl'; // импорт стилей
// Помещаем переменные в классы, которые будут использоваться
let menuOpen = document.querySelector(`.menu-open`),
    mainHeaderNavigation = document.querySelector(`.main-header-navigation`),
    menuClose = document.querySelector(`.menu-close`);

//Определяем поведение меню при клике на кнопку "гамбургер"
menuOpen.addEventListener(`click`, function() { // При клике на кнопку меню сработает функция
    mainHeaderNavigation.style.display = `flex`; // у класса .main-header-navigation меняем 'display none' на 'display flex'
    menuOpen.style.display = `none`; // скрываем иконку "гамбургер"
    menuClose.style.display = `block`; // Отображаем кнопку закрытия меню

});
//Определяем поведение меню при клике на кнопку "закрыть"
menuClose.addEventListener(`click`, function() {  // При клике на кнопку "Х" сработает функция
    mainHeaderNavigation.style.display = `none`; // у класса .main-header-navigation меняем 'display flex' на 'display none'
    menuClose.style.display = `none`; // скрываем кнопку "X"
    menuOpen.style.display = `block`; // Отображаем иконку "гамбургер"
    
});

let productButton = document.querySelector('.product-button'),
    tablePriceList = document.querySelector('.price-list');

productButton.onclick = function() {
    console.log('Кнопка нажата!');
    if (tablePriceList.style.display === `table`) {
        tablePriceList.style.display = `none`;
    } else {
        tablePriceList.style.display = `table`;
    }
};
