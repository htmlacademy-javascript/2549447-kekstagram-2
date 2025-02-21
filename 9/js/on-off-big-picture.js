import { renderComments, clearOldComments } from './render-comments';

const bigPictureElement = document.querySelector('.big-picture');
const picturesElement = document.querySelector('.pictures');
const bigPictureCloseElement = bigPictureElement.querySelector('.big-picture__cancel');
const bodyElement = document.querySelector('body');


const openBigPicture = () => {
  clearOldComments();
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
};

const bigPictureCloseActions = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};

const registerEventsCloseBigPicture = () => {
  bigPictureCloseElement.addEventListener('click', () => {
    bigPictureCloseActions();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      bigPictureCloseActions();
    }
  });
};

const pushDataBigPicture = ({photo, likes, description}) => {
  const bigPictureImgElement = bigPictureElement.querySelector('img');
  const likesCountElement = bigPictureElement.querySelector('.likes-count');
  const altCaptionElement = bigPictureElement.querySelector('.social__caption');

  bigPictureImgElement.src = photo;
  likesCountElement.textContent = likes;
  bigPictureImgElement.alt = description;
  altCaptionElement.textContent = bigPictureImgElement.alt;
};

const onOffBigPicture = (data) => {
  picturesElement.addEventListener('click', (evt) => {
    if(evt.target.closest('.picture')) {
      evt.preventDefault();

      openBigPicture();

      const getDataTargetPost = data.find((element) => {
        const isElementIdTrue = +element.id === +evt.target.closest('.picture').dataset.pictureId;
        return isElementIdTrue;
      });

      pushDataBigPicture(getDataTargetPost);

      renderComments(getDataTargetPost);
    }
  });

  registerEventsCloseBigPicture();
};

export {
  onOffBigPicture
};
