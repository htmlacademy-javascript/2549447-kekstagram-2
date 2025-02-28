const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorMessage = {
  [Method.GET]: 'Не удалось загрузить данные',
  [Method.POST]: 'Не удалось отправить данные',
};

const load = async (route, method = Method.GET, body = null) => {
  const response = await fetch(`${ BASE_URL }${ route }`, { method, body });
  if (response.ok) {
    return await response.json();
  } else {
    return Promise.reject({ message: ErrorMessage[method], status: response.status });
  }
};

const getServerData = async () => await load(Route.GET_DATA);

const sendServerData = async (body) => await load(Route.SEND_DATA, Method.POST, body);

const bootstrap = async (renderTumbnails, initFiltering, showBigPicture, showError) => {
  try {
    const getServerPhotos = await getServerData();
    renderTumbnails(getServerPhotos);
    initFiltering(getServerPhotos);
    showBigPicture(getServerPhotos);
  } catch (error) {
    showError();
  }
};

export {
  bootstrap,
  sendServerData
};
