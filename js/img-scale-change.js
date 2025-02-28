const SCALE_STEP = 25;
const SCALE_MIN_VALUE = 25;
const SCALE_MAX_VALUE = 100;
const SCALE_NORMAL_VALUE = 100;

const imgUploadPreviewContainerElement = document.querySelector('.img-upload__preview-container');
const imgUploadPreviewElement = imgUploadPreviewContainerElement.querySelector('.img-upload__preview');
const imgUploadElement = imgUploadPreviewElement.querySelector('img');
const scaleElement = imgUploadPreviewContainerElement.querySelector('.scale');
const scaleControlValueElement = scaleElement.querySelector('.scale__control--value');
const scaleControlSmallerElement = scaleElement.querySelector('.scale__control--smaller');
const scaleControlBiggerElement = scaleElement.querySelector('.scale__control--bigger');

let currentScaleValue = SCALE_NORMAL_VALUE;

const scaleActions = () => {
  scaleControlValueElement.setAttribute('value', `${ currentScaleValue }%`);
  const clearPersentValue = scaleControlValueElement.value.replace('%', '') * 0.01;
  imgUploadElement.style.transform = `scale(${ clearPersentValue })`;
};

const onScaleControlSmallerElementClick = () => {
  currentScaleValue = Math.max(currentScaleValue - SCALE_STEP, SCALE_MIN_VALUE);
  scaleActions();
};

const onScaleControlBiggerElementClick = () => {
  currentScaleValue = Math.min(currentScaleValue + SCALE_STEP, SCALE_MAX_VALUE);
  scaleActions();
};

const scaleControlEventListener = () => {
  scaleControlSmallerElement.addEventListener(('click'), onScaleControlSmallerElementClick);
  scaleControlBiggerElement.addEventListener(('click'), onScaleControlBiggerElementClick);
  scaleActions();
};

const normalizeScale = () => {
  scaleControlSmallerElement.removeEventListener(('click'), onScaleControlSmallerElementClick);
  scaleControlBiggerElement.removeEventListener(('click'), onScaleControlBiggerElementClick);
  currentScaleValue = SCALE_NORMAL_VALUE;
  scaleActions();
};

export {
  scaleControlEventListener,
  normalizeScale
};
