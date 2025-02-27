const picturesElement = document.querySelector('.pictures');

let tumbnailsArray = [];

const clearShowTumbnails = () => {
  picturesElement.querySelectorAll('a.picture').forEach((item) => item.remove());
};

const renderTumbnails = (data) => {
  clearShowTumbnails();
  tumbnailsArray = data;
  const pictureTemplateElement = document
    .querySelector('#picture')
    .content
    .querySelector('.picture');

  const listPicturesFragment = document.createDocumentFragment();

  tumbnailsArray.forEach(({url, description, likes, comments, id}) => {
    const pictureCloneElement = pictureTemplateElement.cloneNode(true);
    const pictureImgElement = pictureCloneElement.querySelector('.picture__img');
    pictureCloneElement.dataset.pictureId = id;
    pictureImgElement.src = url;
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
