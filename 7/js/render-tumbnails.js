const renderTumbnails = (data) => {
  const pictureTemplateElement = document
    .querySelector('#picture')
    .content
    .querySelector('.picture');

  const picturesElement = document.querySelector('.pictures');

  const listPicturesFragment = document.createDocumentFragment();

  data.forEach(({photo, description, likes, comments, id}) => {
    const pictureCloneElement = pictureTemplateElement.cloneNode(true);
    const pictureImgElement = pictureCloneElement.querySelector('.picture__img');
    pictureCloneElement.dataset.pictureId = id;
    pictureImgElement.src = photo;
    pictureImgElement.alt = description;

    const pictureInfoElement = pictureCloneElement.querySelector('.picture__info');
    pictureInfoElement.querySelector('.picture__likes').textContent = likes;
    pictureInfoElement.querySelector('.picture__comments').textContent = comments.length;

    listPicturesFragment.append(pictureCloneElement);
  });

  picturesElement.append(listPicturesFragment);
};

export {
  renderTumbnails
};
