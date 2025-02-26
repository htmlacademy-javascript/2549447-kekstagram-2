const socialElement = document.querySelector('.social');
const socialCommentsElement = socialElement.querySelector('.social__comments');
const socialCommentElement = socialCommentsElement.querySelector('.social__comment');
const socialCommentCountElement = socialElement.querySelector('.social__comment-count');
const commentsTotalCountElement = socialCommentCountElement.querySelector('.social__comment-total-count');
const commentsShownCountElement = socialCommentCountElement.querySelector('.social__comment-shown-count');
const commentsLoaderElement = socialElement.querySelector('.social__comments-loader');

let startCommentsListLength = 0;
const NEW_COMMENTS_LIST_LENGTH_STEP = 5;
let allComments = [];

const renderCommentsBySteps = () => {
  const listCommentsFragment = document.createDocumentFragment();

  const visibleComments = allComments.slice(startCommentsListLength, startCommentsListLength + NEW_COMMENTS_LIST_LENGTH_STEP);
  const visibleCommentsLength = visibleComments.length + startCommentsListLength;

  visibleComments.forEach(({avatar, name, message}) => {
    const socialCommentCloneElement = socialCommentElement.cloneNode(true);
    const socialPictureElement = socialCommentCloneElement.querySelector('.social__picture');
    const socialTextElement = socialCommentCloneElement.querySelector('.social__text');
    socialPictureElement.src = avatar;
    socialPictureElement.alt = name;
    socialTextElement.textContent = message;

    listCommentsFragment.append(socialCommentCloneElement);
  });

  socialCommentsElement.append(listCommentsFragment);

  commentsShownCountElement.textContent = visibleCommentsLength;
  commentsTotalCountElement.textContent = allComments.length;

  if (allComments.length > visibleCommentsLength) {
    commentsLoaderElement.classList.remove('hidden');
  } else {
    commentsLoaderElement.classList.add('hidden');
  }

  startCommentsListLength += NEW_COMMENTS_LIST_LENGTH_STEP;
};

const clearOldComments = () => {
  startCommentsListLength = 0;
  socialCommentsElement.innerHTML = '';
  commentsLoaderElement.classList.remove('hidden');
  commentsLoaderElement.removeEventListener('click', renderCommentsBySteps);
};

const renderComments = (data) => {
  allComments = data.comments;
  renderCommentsBySteps();
  commentsLoaderElement.addEventListener('click', renderCommentsBySteps);
};

export {
  renderComments,
  clearOldComments
};
