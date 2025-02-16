import { getArrayPosts } from './create-array-posts.js';
import { renderTumbnails } from './render-tumbnails.js';
import { onOffBigPicture } from './on-off-big-picture.js';

const getArrayPostsClone = structuredClone(getArrayPosts);

renderTumbnails(getArrayPostsClone);

onOffBigPicture(getArrayPostsClone);
