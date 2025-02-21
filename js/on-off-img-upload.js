const imgUploadInputElement = document.querySelector('.img-upload__input');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const imgUploadCancelElement = document.querySelector('.img-upload__cancel');
const hashtagInputElement = imgUploadOverlayElement.querySelector('.text__hashtags');
const commentInputElement = imgUploadOverlayElement.querySelector('.text__description');

const resetErrorClass = () => {
  const imgUploadFieldWrapperList = imgUploadOverlayElement.querySelectorAll('.img-upload__field-wrapper');
  imgUploadFieldWrapperList.forEach((item) => {
    item.classList.remove('img-upload__field-wrapper--error');
  });
};

const resetErrorText = () => {
  const pristineErrorList = imgUploadOverlayElement.querySelectorAll('.pristine-error');
  pristineErrorList.forEach((item) => {
    item.textContent = '';
  });
};

const imgCloseActions = () => {
  imgUploadOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  imgUploadInputElement.value = '';
  hashtagInputElement.value = '';
  commentInputElement.value = '';
  resetErrorClass();
  resetErrorText();
};

const imgUploadCancelElementClick = () => {
  registerEventsCloseImgUpload();
  imgCloseActions();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape'){
    evt.preventDefault();
    if(document.activeElement === hashtagInputElement || document.activeElement === commentInputElement){
      evt.stopPropagation();
      bodyElement.classList.add('modal-open');
    } else {
      registerEventsCloseImgUpload();
      imgCloseActions();
    }
  }
};

function registerEventsCloseImgUpload () {
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUploadCancelElement.removeEventListener('click', imgUploadCancelElementClick);
}

const registerEventsOpenImgUpload = () => {
  imgUploadInputElement.addEventListener('change', () => {
    imgUploadOverlayElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    imgUploadCancelElement.addEventListener('click', imgUploadCancelElementClick);
    document.addEventListener('keydown', onDocumentKeydown);
  });
};

const onOffImgUpload = () => {
  registerEventsOpenImgUpload();
  registerEventsCloseImgUpload();
};

export {
  onOffImgUpload
};
