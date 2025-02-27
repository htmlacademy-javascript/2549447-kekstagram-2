const imgUploadElement = document.querySelector('.img-upload');
const imgUploadInputElement = imgUploadElement.querySelector('.img-upload__input');
const imgUploadPreviewElement = imgUploadElement.querySelector('.img-upload__preview img');
const effectsPreviewArrElement = imgUploadElement.querySelectorAll('.effects__preview');

const FILE_TYPES = [
  '.jpg',
  '.jpeg',
  '.png',
  '.webp'
];

const imgUpload = () => {
  const file = imgUploadInputElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));
  if (matches) {
    const url = URL.createObjectURL(file);
    imgUploadPreviewElement.src = url;
    effectsPreviewArrElement.forEach((item) => {
      item.style.backgroundImage = `url(${url})`;
    });
  } else {
    return false;
  }
};

export {
  imgUpload
};
