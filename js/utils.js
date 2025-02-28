const ERROR_SET_TIMEOUT = 5000;
const RENDER_DELAY = 500;

const bodyElement = document.querySelector('body');
const dataErrorTemplateElement = bodyElement.querySelector('#data-error').content;

const showErrorMessage = () => {
  const dataErrorCloneElement = dataErrorTemplateElement.cloneNode(true);
  bodyElement.append(dataErrorCloneElement);
  const dataErrorElement = bodyElement.querySelector('.data-error');
  setTimeout(() => {
    dataErrorElement.remove();
  }, ERROR_SET_TIMEOUT);
};

const debounce = (cb, timeoutDelay = RENDER_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb.apply(this, rest), timeoutDelay);
  };
};

export {
  showErrorMessage,
  debounce,
};
