// Переключение выпадающего меню
const pageHeader = document.querySelector('.page-header');
const burger = document.querySelector('.page-header__burger');
const navigation = document.querySelector('.main-navigation');
const navigationClose = document.querySelector('.main-navigation__close');
const navigationLinks = document.querySelectorAll('.main-navigation__link');

pageHeader.classList.remove('no-js');

function showNavigation() {
  navigation.classList.add('main-navigation--open');

  navigationLinks.forEach((link) => {
    link.addEventListener('click', hideNavigation);
  });
};

function hideNavigation() {
  navigation.classList.remove('main-navigation--open');
};

const onBurgerClick = () => {
  showNavigation();
};

const onCloseClick = () => {
  hideNavigation();
};

burger.addEventListener('click', onBurgerClick);
navigationClose.addEventListener('click', onCloseClick);

//Переключение карточек страны
const countriesToggle = document.querySelectorAll('.countries__toggle');
const previousControl = document.querySelector('.countries__toggle--current');
const countriesInfo = document.querySelectorAll('.countries__information');
// const navigation = document.querySelector('.main-navigation');

//функция, кот-ая переключает вкладки стран
function showCountriesToggle(index) {
  //записываем в переменную 1 элемент из массива countriesToggle
  const currentControl = countriesToggle[index]
  //на этот элемент мы вешаем активный класс
  currentControl.classList.add('countries__toggle--current');
  //а предыдущий активный класс убираем
  previousControl.classList.remove('countries__toggle--current');
}

//функция клика, на кот-ую переключается элемент
const onToggleClick = (item) => {
  //на айтем вешаем клик и функцию, кот-ая переключает вкладки стран
  item.addEventListener('click', showCountriesToggle);
};

