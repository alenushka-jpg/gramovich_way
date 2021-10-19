const toggles = document.querySelectorAll('.countries__toggle');
const countriesInformation = document.querySelectorAll('.countries__information');
const placesLinks = document.querySelectorAll('.places__link');
const buyTourButtons = document.querySelectorAll('.js-open-popup');
const buyCloseButtons = document.querySelectorAll('.js-close-popup');
const popupOverlays = document.querySelectorAll('.overlay');
const buyTourModal = document.querySelector('.modal-window');

function setFocus() {
  const input = document.querySelector('.js-focus-input');
  input.focus();
}

function onPopupKeydown(evt) {
  if (isEscEvent(evt)) {
    closePopup();
  };
};

function openPopup() {
  buyTourModal.classList.add('modal-window--show');
  setFocus();
  document.addEventListener('keydown', onPopupKeydown);
};

function closePopup() {
  buyTourModal.classList.remove('modal-window--show');
  document.removeEventListener('keydown', onPopupKeydown);
};

function selectCurrent(index) {
  const currentControl = toggles[index];
  const previousControl = document.querySelector('.countries__toggle.countries__toggle--current');
  previousControl.classList.remove('countries__toggle--current');
  currentControl.classList.add('countries__toggle--current');
};

function showCountryInfo(index) {
  const currentControl = countriesInformation[index];
  const previousControl = document.querySelector('.countries__information.countries__information--current');
  previousControl.classList.remove('countries__information--current');
  currentControl.classList.add('countries__information--current');
};

placesLinks.forEach((button, index) => {
  button.addEventListener('click', () => {
    showCountryInfo(index);
    selectCurrent(index);
  });
});

toggles.forEach((control, index) => {
  control.addEventListener('click', () => {
    showCountryInfo(index);
    selectCurrent(index);
  });
});

buyTourButtons.forEach((button) => {
  button.addEventListener('click', openPopup)
})

buyCloseButtons.forEach((button) => {
  button.addEventListener('click', closePopup)
})

popupOverlays.forEach((overlay) => {
  overlay.addEventListener('click', closePopup)
})
