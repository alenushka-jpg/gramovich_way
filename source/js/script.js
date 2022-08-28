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

const tabsSwitch = document.querySelectorAll('.countries__toggle');
const contentSwitch = document.querySelectorAll('.countries__information');

window.onload = function () {
  for (let i = 0; i < tabsSwitch.length; i++) {
    tabsSwitch[i].onclick = countrySwitchClick;
  }
}

function tabsSwitchOnOff(index, enable) {
  if (enable) {
    tabsSwitch[index].classList.add('countries__toggle--current');
  }
  else {
    tabsSwitch[index].classList.remove('countries__toggle--current');
  }
}

function contentSwitchOnOff(index, show) {
  contentSwitch[index].style.display = show === true ? "flex" : "none";
}

function countrySwitchClick(e) {
  let target = e.target;
  let isEnable;
  for (let i = 0; i < tabsSwitch.length; i++) {
    isEnable = (tabsSwitch[i] == target);
    tabsSwitchOnOff(i, isEnable);
    contentSwitchOnOff(i, isEnable);
  }
}
