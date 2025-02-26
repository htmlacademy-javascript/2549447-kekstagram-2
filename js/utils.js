const bodyElement = document.querySelector('body');
const dataErrorTemplateElement = bodyElement.querySelector('#data-error').content;

const ERROR_SET_TIMEOUT = 5000;

const showErrorMessage = () => {
  const dataErrorCloneElement = dataErrorTemplateElement.cloneNode(true);

  bodyElement.append(dataErrorCloneElement);

  const dataErrorElement = bodyElement.querySelector('.data-error');

  setTimeout(() => {
    dataErrorElement.remove();
  }, ERROR_SET_TIMEOUT);
};


const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomId = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export {
  showErrorMessage,
  getRandomInteger,
  getRandomId,
};
