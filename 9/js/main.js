import { getArrayPosts } from './create-array-posts.js';
import { renderTumbnails } from './render-tumbnails.js';
import { onOffBigPicture } from './on-off-big-picture.js';
import { onOffImgUpload } from './on-off-img-upload.js';
import { htAndComValidation } from './validation-hashtags-and-comments.js';

const getArrayPostsClone = structuredClone(getArrayPosts);

renderTumbnails(getArrayPostsClone);
onOffBigPicture(getArrayPostsClone);
onOffImgUpload();
htAndComValidation();
