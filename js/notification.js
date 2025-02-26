const bodyElement = document.querySelector('body');

const closeNotification = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeExistElement = existElement.querySelector('button');
  if (evt.target === existElement || evt.target === closeExistElement || evt.key === 'Escape') {
    existElement.remove();
    bodyElement.removeEventListener('click', closeNotification);
    bodyElement.removeEventListener('keydown', closeNotification);
  }
};

const appendNotification = (template, trigger = null) => {
  trigger?.();
  const templateCloneNode = template.cloneNode(true);
  bodyElement.append(templateCloneNode);
  bodyElement.addEventListener('click', closeNotification);
  bodyElement.addEventListener('keydown', closeNotification);
};

export {
  appendNotification
};
