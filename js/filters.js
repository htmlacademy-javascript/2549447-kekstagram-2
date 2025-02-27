import { renderTumbnails } from './render-tumbnails.js';
import { debounce } from './utils.js';

const imgFiltersElement = document.querySelector('.img-filters');

const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};

const SORT_FUNCTION = {
  random: () => 0.5 - Math.random(),
  discussed: (a, b) => b.comments.length - a.comments.length,
};

const RANDOM_IMG_SHOW_MAX = 10;

const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

let currentFilter = FILTER.default;
let tumbnailsArray = [];

const debounceRenderingTumbnails = debounce(renderTumbnails);

const applyFilter = () => {
  let filteredPictures = [];
  if (currentFilter === FILTER.default) {
    filteredPictures = tumbnailsArray;
  }
  if (currentFilter === FILTER.random) {
    filteredPictures = tumbnailsArray.toSorted(SORT_FUNCTION.random).slice(0, RANDOM_IMG_SHOW_MAX);
  }
  if (currentFilter === FILTER.discussed) {
    filteredPictures = tumbnailsArray.toSorted(SORT_FUNCTION.discussed);
  }
  debounceRenderingTumbnails(filteredPictures);
};

const filterChange = (evt) => {
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

const configFilter = (data) => {
  imgFiltersElement.classList.remove('img-filters--inactive');
  imgFiltersElement.addEventListener('click', filterChange);
  tumbnailsArray = data;
};

export {
  configFilter
};
