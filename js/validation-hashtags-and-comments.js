const imgUploadFormElement = document.querySelector('.img-upload__form');
const hashtagInputElement = imgUploadFormElement.querySelector('.text__hashtags');
const commentInputElement = imgUploadFormElement.querySelector('.text__description');

const HASHTAGS_ARRAY_LENGTH_MAX = 5;
const COMMENT_LENGTH_MAX = 140;

const pristine = new Pristine(imgUploadFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
});

const inputHashtags = (value) => value.toLowerCase().trim().split(/\s+/);

const isHashtagValueValid = (value) => {
  if (inputHashtags(value).every(
    (item) => {
      const hashtagValidText = /^#[a-zа-яё0-9]{1,19}$/i.test(item);
      const hashtagValidEmpty = /^$/.test(item);
      if (hashtagValidText || hashtagValidEmpty) {
        return true;
      }
    }
  )) {
    return true;
  } else {
    return false;
  }
};

const isHashtagsRepeatValid = (value) => {
  if (inputHashtags(value).some((item, num, array) => array.includes(item, num + 1))) {
    return false;
  } else {
    return true;
  }
};

const isHashtagsQuantityValid = (value) => {
  const hashtagsQuantityValid = inputHashtags(value).length <= HASHTAGS_ARRAY_LENGTH_MAX;
  if (hashtagsQuantityValid) {
    return hashtagsQuantityValid;
  } else {
    return false;
  }
};

const isCommentValid = (value) => {
  const commentValidLength = value.length <= COMMENT_LENGTH_MAX;
  if (commentValidLength) {
    return commentValidLength;
  } else {
    return false;
  }
};

const initValidation = () => {
  pristine.addValidator(hashtagInputElement, isHashtagValueValid, 'введён невалидный хэштег');
  pristine.addValidator(hashtagInputElement, isHashtagsRepeatValid, 'хэштеги повторяются');
  pristine.addValidator(hashtagInputElement, isHashtagsQuantityValid , 'превышено количество хэштегов');
  pristine.addValidator(commentInputElement, isCommentValid, 'длина комментария больше 140 символов');
};

const hashtagsInputNormalize = () => {
  hashtagInputElement.value = hashtagInputElement.value.trim().replaceAll(/\s+/g, ' ');
};

export {
  initValidation,
  pristine,
  hashtagsInputNormalize
};
