const bodyElement = document.querySelector('body');

const onNotificationClickClose = (evt) => {
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeExistElement = existElement.querySelector('button');
  if (evt.target === existElement || evt.target === closeExistElement) {
    existElement.remove();
    bodyElement.removeEventListener('click', onNotificationClickClose);
  }
};

const onNotificationKeydownClose = (evt) => {
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  evt.stopPropagation();
  if (evt.key === 'Escape') {
    existElement.remove();
    bodyElement.removeEventListener('keydown', onNotificationKeydownClose);
  }
};

const appendNotification = (template, trigger = null) => {
  trigger?.();
  const templateCloneNode = template.cloneNode(true);
  bodyElement.append(templateCloneNode);
  bodyElement.addEventListener('click', onNotificationClickClose);
  bodyElement.addEventListener('keydown', onNotificationKeydownClose);
};

export {
  appendNotification
};
