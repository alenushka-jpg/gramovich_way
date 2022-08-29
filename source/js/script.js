
const pageHeader = document.querySelector('.page-header');
const burger = document.querySelector('.page-header__burger');
const navigation = document.querySelector('.main-navigation');
const navigationClose = document.querySelector('.main-navigation__close');
const navigationLinks = document.querySelectorAll('.main-navigation__link');
const overlay = document.querySelector('.overlay');
const modalWindow = document.querySelector('.modal-window');
const modalOpen = document.querySelectorAll('.js-open-popup');
const modalClose = document.querySelector('.js-close-popup');

pageHeader.classList.remove('no-js');

// Переключение выпадающего меню
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

//Подключение модального окна
function showModal() {
  modalWindow.classList.add('modal-window--show');
}

function hideModal() {
  modalWindow.classList.remove('modal-window--show');
}

const onModalClick = () => {
  showModal();
}

const onModalCloseClick = () => {
  hideModal();
}

modalOpen.forEach((item) => {
  item.addEventListener('click', onModalClick);
})

modalClose.addEventListener('click', onModalCloseClick);

if (overlay) {
  overlay.addEventListener('click', hideModal);
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalWindow.classList.contains('modal-window--show')) {
      evt.preventDefault();
      modalWindow.classList.remove('modal-window--show');
    }
  }
});
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
