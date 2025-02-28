import { bootstrap } from './api.js';
import { showErrorMessage } from './utils.js';
import { renderTumbnails } from './render-tumbnails.js';
import { onOffBigPicture } from './on-off-big-picture.js';
import { registerEventsOpenImgUpload } from './on-off-img-upload.js';
import { initFormSubmit } from './send-form.js';
import { initFiltering } from './filters.js';
import { initValidation } from './validation-hashtags-and-comments.js';

bootstrap(renderTumbnails, initFiltering, onOffBigPicture, showErrorMessage);
registerEventsOpenImgUpload();
initValidation();
initFormSubmit();
