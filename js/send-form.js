import { sendServerData } from './api.js';
import { pristine, hashtagsInputNormalize } from './validation-hashtags-and-comments.js';
import { onImgReset } from './on-off-img-upload.js';
import { appendNotification } from './notification.js';

const imgUploadFormElement = document.querySelector('.img-upload__form');
const imgUploadSubmitElement = imgUploadFormElement.querySelector('.img-upload__submit');
const templateSuccess = document.querySelector('#success').content;
const templateError = document.querySelector('#error').content;

const disabledSubmitButton = () => {
  imgUploadSubmitElement.disabled = true;
};

const enableSubmitButton = () => {
  imgUploadSubmitElement.disabled = false;
};

const sendFormData = async (formElement) => {
  if (pristine.validate()) {
    disabledSubmitButton();
    try {
      await sendServerData(new FormData(formElement));
      appendNotification(templateSuccess, () => onImgReset());
    } catch (error) {
      appendNotification(templateError);
    } finally {
      enableSubmitButton();
    }
  }
};

const onFormSubmitCheck = (evt) => {
  evt.preventDefault();
  hashtagsInputNormalize();
  sendFormData(evt.target);
};

const initFormSubmit = () => {
  imgUploadFormElement.addEventListener('submit', onFormSubmitCheck);
};

export {
  initFormSubmit
};
