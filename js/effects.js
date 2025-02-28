const imgUploadElement = document.querySelector('.img-upload__preview img');
const effectLevelElement = document.querySelector('.img-upload__effect-level');
const effectLevelValueElement = effectLevelElement.querySelector('.effect-level__value');
const effectLevelSliderElement = effectLevelElement.querySelector('.effect-level__slider');
const effectsListElement = document.querySelector('.effects__list');
const effectNoneElement = effectsListElement.querySelector('#effect-none');
const effectChromeElement = effectsListElement.querySelector('#effect-chrome');
const effectSepiaElement = effectsListElement.querySelector('#effect-sepia');
const effectMarvinElement = effectsListElement.querySelector('#effect-marvin');
const effectPhobosElement = effectsListElement.querySelector('#effect-phobos');
const effectHeatElement = effectsListElement.querySelector('#effect-heat');

noUiSlider.create(effectLevelSliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const filterChange = (filter, unit) => {
  effectLevelSliderElement.noUiSlider.on('update', () => {
    effectLevelValueElement.setAttribute('value', effectLevelSliderElement.noUiSlider.get() + unit);
    imgUploadElement.style.filter = `${ filter }(${ effectLevelValueElement.getAttribute('value') })`;
  });
};

const resetEffects = () => {
  effectLevelValueElement.removeAttribute('value');
  imgUploadElement.style.filter = '';
  effectLevelElement.classList.add('hidden');
};

const getSettingsEffectGrayscalSepia = () => {
  effectLevelSliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  });
};

const getSettingsEffectMarvin = () => {
  effectLevelSliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  });
};

const getSettingsEffectPhobos = () => {
  effectLevelSliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  });
};

const getSettingsEffectHeat = () => {
  effectLevelSliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  });
};

const effectsEventListener = () => {
  effectNoneElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      resetEffects();
    }
  });

  effectChromeElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      effectLevelElement.classList.remove('hidden');
      filterChange('grayscale','');
      getSettingsEffectGrayscalSepia();
    }
  });

  effectSepiaElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      effectLevelElement.classList.remove('hidden');
      filterChange('sepia','');
      getSettingsEffectGrayscalSepia();
    }
  });

  effectMarvinElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      effectLevelElement.classList.remove('hidden');
      filterChange('invert','%');
      getSettingsEffectMarvin();
    }
  });

  effectPhobosElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      effectLevelElement.classList.remove('hidden');
      filterChange('blur','px');
      getSettingsEffectPhobos();
    }
  });

  effectHeatElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      effectLevelElement.classList.remove('hidden');
      filterChange('brightness','');
      getSettingsEffectHeat();
    }
  });
};

export {
  effectsEventListener,
  resetEffects
};
