import { getDataArrayPosts } from './data.js';
import { getRandomId, getRandomInteger } from './utils.js';

const POSTS_ARRAY_LENGTH = 25;
const AVATARS_SET = {
  MIN: 1,
  MAX: 6,
};
const LIKES_SET = {
  MIN: 15,
  MAX: 200,
};
const COMMENTS_SET = {
  MIN: 0,
  MAX: 30,
};
const POST_ID_SET = {
  MIN: 1,
  MAX: 25,
};
const PHOTO_ID_SET = {
  MIN: 1,
  MAX: 25,
};
const COMMENT_ID_SET = {
  MIN: 1,
  MAX: 10000,
};

const { DESCRIPTIONS, COMMENTS, NAMES } = getDataArrayPosts();

const generatePostId = getRandomId(POST_ID_SET.MIN, POST_ID_SET.MAX);
const generatePhotoId = getRandomId(PHOTO_ID_SET.MIN, PHOTO_ID_SET.MAX);
const commentId = getRandomId(COMMENT_ID_SET.MIN, COMMENT_ID_SET.MAX);

const comment = () => {
  const avatarUrl = `img/avatar-${ getRandomInteger(AVATARS_SET.MIN, AVATARS_SET.MAX) }.svg`;
  const randomCommentIndex = getRandomInteger(0, COMMENTS.length - 1);
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  return {
    id: commentId(),
    avatar: avatarUrl,
    comment: COMMENTS[randomCommentIndex],
    name: NAMES[randomNameIndex],
  };
};

const createPost = () => {
  const photoId = generatePhotoId();
  const postId = generatePostId();
  const photoUrl = `photos/${ photoId }.jpg`;
  const likes = getRandomInteger(LIKES_SET.MIN, LIKES_SET.MAX);
  const commentsNumder = getRandomInteger(COMMENTS_SET.MIN, COMMENTS_SET.MAX);

  const getCommentsArray = Array.from({length: commentsNumder}, comment);
  return {
    id: postId,
    photo: photoUrl,
    description: DESCRIPTIONS[photoId - 1],
    likes: likes,
    comments: getCommentsArray,
  };
};

const getArrayPosts = Array.from({length: POSTS_ARRAY_LENGTH}, createPost);

export {
  getArrayPosts
};
