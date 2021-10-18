const burger = document.querySelector('.page-header__burger');
const navigation = document.querySelector('.main-navigation');
const navigationClose = document.querySelector('.main-navigation__close');
const navigationLinks = document.querySelectorAll('.main-navigation__link');

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
