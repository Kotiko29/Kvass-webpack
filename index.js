/*jshint esversion: 6 */
import style from './src/assets/style/index.styl'; // импорт стилей
// Помещаем в переменные классы, которые будут использоваться
let hamb = document.querySelector(`.hamb`),
    mainHeaderNavigation = document.querySelector(`.main-nav`),
    menuClose = document.querySelector(`.menu-close`);

//Определяем поведение меню при клике на кнопку "гамбургер"
hamb.addEventListener(`click`, function() { // При клике на кнопку меню сработает функция
    mainHeaderNavigation.classList.toggle('show'); // у класса .main-header-navigation переключаем класс show
    hamb.classList.toggle('hamb-close');
});
//Определяем поведение меню при клике на кнопку "закрыть"
// menuClose.addEventListener(`click`, function() {  // При клике на кнопку "Х" сработает функция
//     mainHeaderNavigation.classList.add('hide');
//     mainHeaderNavigation.classList.remove('show');
//     menuClose.style.display = `none`; // скрываем кнопку "X"
//     hamb.style.display = `block`; // Отображаем иконку "гамбургер"
    
// });


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
let priceList = document.querySelector('.price-list');
for (let i = 0; i < tr.length; i++) { // в цикле перебираем массив tr 
    tr[i].onclick = function() { // при клике на строку вызывается функция, которая добавляет стиль строке
    tr[i].remove();
    };
}

// Form
let formSend = document.querySelector('#form-send'), 
    form  = document.getElementsByTagName('form')[0],
    // name = document.querySelector('.name'),
    // phone = document.querySelector('.phone'),
    // phone2 = document.querySelector('.phone2'),
    // email = document.querySelector('.email'),
    // orderQuantity = document.querySelector('.order-quantity'),
    // comment = document.querySelector('.comment'),
    // assent = document.querySelector('.assent'),
    fields = document.querySelectorAll('.field'),
    feedback = document.querySelector('.feedback'),
    formModal = document.querySelector('.modal'),
    formModalClose = document.querySelector('.modal-close');
    
form.addEventListener('submit', function (event) { // При клике отправке формы

    event.preventDefault();  // отменяем переход на новый URL

    for (let i = 0; i < fields.length; i++) { // в цикле перебираем элементы формы
        var element = fields[i];
        console.log(element);
        if (!element.value) { // если получаем false
            console.log('Поле не заполнено', element);
            element.classList.add('error');  // добавляем элементу класс error
        } else {  // иначе показываем окно с сообщением "Отправлено" 
            feedback.style.display = 'none';
            formModal.style.display = 'block';
        }
    }
    formModalClose.addEventListener(`click`, function() { // При клике на кнопку  сработает функция
        formModal.style.display = `none`; // скрываем окно
    });  
});

