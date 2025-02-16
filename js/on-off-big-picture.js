import { renderComments } from './render-comments';

const bigPictureElement = document.querySelector('.big-picture');
const picturesElement = document.querySelector('.pictures');
const bigPictureCloseElement = bigPictureElement.querySelector('.big-picture__cancel');
const socialCommentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');


const openBigPicture = () => {
  bigPictureElement.classList.remove('hidden');
  socialCommentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  bodyElement.classList.add('modal-open');
};

const closeBigPicture = () => {
  const bigPictureCloseActions = () => {
    bigPictureElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  };

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

const pushDataBigPicture = ({photo, likes, comments, description}) => {
  const bigPictureImgElement = bigPictureElement.querySelector('img');
  const likesCountElement = bigPictureElement.querySelector('.likes-count');
  const commentsTotalCountElement = bigPictureElement.querySelector('.social__comment-total-count');
  const commentsShownCountElement = bigPictureElement.querySelector('.social__comment-shown-count');
  const altCaptionElement = bigPictureElement.querySelector('.social__caption');

  bigPictureImgElement.src = photo;
  likesCountElement.textContent = likes;
  commentsTotalCountElement.textContent = comments.length;
  commentsShownCountElement.textContent = commentsTotalCountElement.textContent;
  bigPictureImgElement.alt = description;
  altCaptionElement.textContent = bigPictureImgElement.alt;
};

const onOffBigPicture = (data) => {
  picturesElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    if(evt.target.closest('.picture')) {
      openBigPicture();

      const getDataTargetPost = data.find((element) => {
        const isElementIdTrue = +element.id === +evt.target.closest('.picture').dataset.pictureId;
        return isElementIdTrue;
      });

      pushDataBigPicture(getDataTargetPost);

      renderComments(getDataTargetPost);
    }
  });

  closeBigPicture();
};

export {
  onOffBigPicture
};
