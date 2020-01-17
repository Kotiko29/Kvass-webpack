/*jshint esversion: 6 */
import style from './src/assets/style/index.styl'; // импорт стилей
// Помещаем в переменные классы, которые будут использоваться
let hamb = document.querySelector(`.hamb`),
    mainHeaderNavigation = document.querySelector(`.main-header-navigation`),
    menuClose = document.querySelector(`.menu-close`);

//Определяем поведение меню при клике на кнопку "гамбургер"
hamb.addEventListener(`click`, function() { // При клике на кнопку меню сработает функция
    mainHeaderNavigation.style.display = `flex`; // у класса .main-header-navigation меняем 'display none' на 'display flex'
    hamb.style.display = `none`; // скрываем иконку "гамбургер"
    menuClose.style.display = `block`; // Отображаем кнопку закрытия меню

});
//Определяем поведение меню при клике на кнопку "закрыть"
menuClose.addEventListener(`click`, function() {  // При клике на кнопку "Х" сработает функция
    mainHeaderNavigation.style.display = `none`; // у класса .main-header-navigation меняем 'display flex' на 'display none'
    menuClose.style.display = `none`; // скрываем кнопку "X"
    hamb.style.display = `block`; // Отображаем иконку "гамбургер"
    
});


// Скрываем и показываем таблицу
// let productButton = document.querySelector('.product-button'),
//     tablePriceList = document.querySelector('.price-list');
// Вызываем функцию → при нажатии на элемент с классом "product-button" (заголовок раздела) будет скрываться или отображаться таблица
// productButton.onclick = function() {
//     if (tablePriceList.style.display === `table`) {// если таблица отображается
//         tablePriceList.style.display = `none`;// то при клике скрываем
//     } else {
//         tablePriceList.style.display = `table`;// иначе показываем
//     }
// };
// Скрываем строки таблицы при нажатии
let tr = document.querySelectorAll('.price-list tr'); // добавляем в переменную псевдомассив со строками таблицы
for (let i = 0; i < tr.length; i++) { // в цикле перебираем массив tr 
    tr[i].onclick = function() { // при клике на строку вызывается функция, которая добавляет стиль строке
    tr[i].style.display = 'none';
    };
}

// Form
let formSend = document.querySelector('#form-send');
let form  = document.getElementsByTagName('form')[0];
let formItem = document.querySelectorAll('form input[required]');

form.addEventListener('submit', function (evt) {
    evt.preventDefault();  
    console.log('Форма не отправилась');
  });


for (let i = 0; i < formItem.length; i++) {
    console.log(formItem[i]);
    formSend.onclick = function() {
        
        if (formItem[i].value == '') {
            console.log (formItem[i]);
            formItem[i].style.backgroundColor = 'blue';
        } else {
            console.log (55);
            formItem[i].style.border = '2px solid green';
        }
    };
    
}
