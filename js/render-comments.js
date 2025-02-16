const socialCommentsElement = document.querySelector('.social__comments');
const socialCommentElement = socialCommentsElement.querySelector('.social__comment');

const clearOldComments = () => {
  while (socialCommentsElement.firstChild) {
    socialCommentsElement.removeChild(socialCommentsElement.firstChild);
  }
};

const renderComments = ({comments}) => {
  clearOldComments();

  const getTargetCommentsArray = comments;
  const listCommentsFragment = document.createDocumentFragment();

  getTargetCommentsArray.forEach(({avatar, name, comment}) => {
    const socialCommentCloneElement = socialCommentElement.cloneNode(true);
    const socialPictureElement = socialCommentCloneElement.querySelector('.social__picture');
    const socialTextElement = socialCommentCloneElement.querySelector('.social__text');
    socialPictureElement.src = avatar;
    socialPictureElement.alt = name;
    socialTextElement.textContent = comment;

    listCommentsFragment.append(socialCommentCloneElement);
  });

  socialCommentsElement.append(listCommentsFragment);
};

export {
  renderComments
};
