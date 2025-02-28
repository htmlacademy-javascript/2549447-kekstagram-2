import { imgUpload } from './img-upload.js';
import { scaleControlEventListener, normalizeScale } from './img-scale-change.js';
import { resetEffects, effectsEventListener } from './effects.js';

const bodyElement = document.querySelector('body');
const imgUploadElement = bodyElement.querySelector('.img-upload');
const imgUploadInputElement = imgUploadElement.querySelector('.img-upload__input');
const imgUploadOverlayElement = imgUploadElement.querySelector('.img-upload__overlay');
const imgUploadCancelElement = imgUploadElement.querySelector('.img-upload__cancel');
const hashtagInputElement = imgUploadOverlayElement.querySelector('.text__hashtags');
const commentInputElement = imgUploadOverlayElement.querySelector('.text__description');
const imgUploadFormElement = imgUploadElement.querySelector('.img-upload__form');

const resetErrorClass = () => {
  const uploadImages = imgUploadOverlayElement.querySelectorAll('.img-upload__field-wrapper');
  uploadImages.forEach((item) => {
    item.classList.remove('img-upload__field-wrapper--error');
  });
};

const resetPrisineError = () => {
  const pristineErrors = imgUploadOverlayElement.querySelectorAll('.pristine-error');
  pristineErrors.forEach((item) => {
    item.innerHTML = '';
  });
};

const onImgReset = () => {
  removeEventsCloseImgUpload();
  imgUploadOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  imgUploadFormElement.reset();
  resetErrorClass();
  resetPrisineError();
  normalizeScale();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape'){
    evt.preventDefault();
    if(document.activeElement === hashtagInputElement || document.activeElement === commentInputElement){
      evt.stopPropagation();
      bodyElement.classList.add('modal-open');
    } else {
      onImgReset();
    }
  }
};

function removeEventsCloseImgUpload () {
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUploadCancelElement.removeEventListener('click', onImgReset);
}

const registerEventsOpenImgUpload = () => {
  imgUploadInputElement.addEventListener('change', () => {
    if (imgUpload() === false) {
      onImgReset();
    } else {
      document.addEventListener('keydown', onDocumentKeydown);
      imgUploadOverlayElement.classList.remove('hidden');
      bodyElement.classList.add('modal-open');
      imgUploadCancelElement.addEventListener('click', onImgReset);
      scaleControlEventListener();
      resetEffects();
      effectsEventListener();
    }
  });
};

export {
  registerEventsOpenImgUpload,
  onImgReset
};
