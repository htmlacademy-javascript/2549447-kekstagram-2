import { renderTumbnails } from './render-tumbnails.js';
import { debounce } from './utils.js';

const RANDOM_IMG_SHOW_MAX = 10;

const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};

const SORT_FUNCTION = {
  getRandomNumber: () => 0.5 - Math.random(),
  getFilteringValue: (a, b) => b.comments.length - a.comments.length,
};

const imgFiltersElement = document.querySelector('.img-filters');

let currentFilter = FILTER.default;
let tumbnailsArray = [];

const debounceRenderingTumbnails = debounce(renderTumbnails);

const applyFilter = () => {
  let filteredPictures = [];
  if (currentFilter === FILTER.default) {
    filteredPictures = tumbnailsArray;
  }
  if (currentFilter === FILTER.random) {
    filteredPictures = tumbnailsArray.toSorted(SORT_FUNCTION.getRandomNumber).slice(0, RANDOM_IMG_SHOW_MAX);
  }
  if (currentFilter === FILTER.discussed) {
    filteredPictures = tumbnailsArray.toSorted(SORT_FUNCTION.getFilteringValue);
  }
  debounceRenderingTumbnails(filteredPictures);
};

const onFilterChange = (evt) => {
  const targetButton = evt.target;
  const activeButtonElement = imgFiltersElement.querySelector(`.${ACTIVE_BUTTON_CLASS}`);
  if (!targetButton.matches('button')) {
    return;
  }
  if (activeButtonElement === targetButton) {
    return;
  }
  activeButtonElement.classList.toggle('img-filters__button--active');
  targetButton.classList.toggle('img-filters__button--active');
  currentFilter = targetButton.getAttribute('id');

  applyFilter();
};

const initFiltering = (data) => {
  imgFiltersElement.classList.remove('img-filters--inactive');
  imgFiltersElement.addEventListener('click', onFilterChange);
  tumbnailsArray = data;
};

export {
  initFiltering
};
