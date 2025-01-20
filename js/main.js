const DESCRIPTIONS = [
  'Вид на пляж с лежаками и отелями.',
  'Деревянный указатель Идите на пляж.',
  'Пляж с белым песком и бирюзовым морем.',
  'Женщина в купальнике на пляже с фотоаппаратом.',
  'Рис с овощами и мясом в виде смайликов.',
  'Черный спортивный автомобиль с открытыми дверями.',
  'Две половинки клубники на деревянной тарелке.',
  'Красный напиток в стаканах.',
  'Женщина в купальнике на пляже.',
  'Система хранения обуви.',
  'Дорога на пляж.',
  'Белая Audi.',
  'Блюдо с красной рыбой и овощами.',
  'Суши-котик.',
  'Отдыхаем.',
  'Вид с высоты птичьего полета.',
  'Хор в черной одежде.',
  'Красный классический ретро автомобиль.',
  'Ноу-хау тапочки с подсветкой.',
  'Пальмы во дворе на фоне неба.',
  'Вкуснятина!',
  'Закат на море.',
  'Крабик.',
  'Еее роцк!..!',
  'Захватывающее автомобильное сафари.',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Степан',
  'Илья',
  'Ольга',
  'Адам',
  'Полина',
  'Алексей',
  'Никита',
  'Екатерина',
  'Анна',
  'Виктория',
  'Ярослав',
  'Елисей',
  'Михаил',
  'Алиса',
  'Александра',
  'Юрий',
  'Варвара',
  'Богдан',
  'Иван',
  'Агата',
];

const POSTS_ARRAY_LENGTH = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max }`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const generatePostId = getRandomIdFromRangeGenerator(1, 25);
const generatePhotoId = getRandomIdFromRangeGenerator(1, 25);
const commentId = getRandomIdFromRangeGenerator(1, 10000);

const comment = () => {
  const avatarUrl = `img/avatar-${ getRandomInteger(1, 6) }.svg`;
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
  const likes = getRandomInteger(15, 200);
  const commentsNumder = getRandomInteger(0, 30);

  const commentsArray = Array.from({length: commentsNumder}, comment);
  return {
    id: postId,
    photo: photoUrl,
    description: DESCRIPTIONS[photoId - 1],
    likes: likes,
    comments: commentsArray,
  };
};

const posts = Array.from({length: POSTS_ARRAY_LENGTH}, createPost);

console.log(posts);
