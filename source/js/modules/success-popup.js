const successMessage = documen.querySelector('.success-message');
const closeSuccessButtons = document.querySelectorAll('.js-close-success-popup');
const popupOverlays = document.querySelectorAll('.overlay');

function onPopupKeydown(evt) {
  if (isEscEvent(evt)) {
    closeSuccessPopup();
  };
};

function closeSuccessPopup() {
  successMessage.classList.remove('success-message--show');
  document.removeEventListener('keydown', onPopupKeydown);
}

function showResultPopup() {
  successMessage.classList.add('success-message--show');
  document.addEventListener('keydown', onPopupKeydown);
};

closeSuccessButtons.forEach((button) => {
  button.addEventListener('click', closeSuccessPopup);
});

popupOverlays.forEach((overlay) => {
  overlay.addEventListener('click', closeSuccessPopup);
});

export {onPopupKeydown, showResultPopup}
