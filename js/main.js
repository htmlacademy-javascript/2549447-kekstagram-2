import { getArrayPosts } from './create-array-posts.js';
import { renderTumbnails } from './render-tumbnails.js';
renderTumbnails(structuredClone(getArrayPosts));
