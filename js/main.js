import { getArrayPosts } from './create-array-posts.js';
import { renderTumbnails } from './render-tumbnails.js';
import { onOffBigPicture } from './on-off-big-picture.js';
import { registerEventsOpenImgUpload } from './on-off-img-upload.js';
import { initValidation } from './validation-hashtags-and-comments.js';

const getArrayPostsClone = structuredClone(getArrayPosts);

renderTumbnails(getArrayPostsClone);
onOffBigPicture(getArrayPostsClone);
registerEventsOpenImgUpload();
initValidation();
