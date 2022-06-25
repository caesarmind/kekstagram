/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-undef
// const checkStringLength = (string, maxLength) => string.length < maxlength;

// checkStringLength();

//Generate random number
const generateRandomN = function(min, max) {
  if(min > 0 || min < max) {

    const difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);

    rand = rand + min;

    return rand;

  } else {
    return NaN;
  }
};

const RANDOM_OBJECT_NUM = 25;
const descId = Array.from({length: RANDOM_OBJECT_NUM}, (array, index) => index+1);
const photoId = Array.from({length: RANDOM_OBJECT_NUM}, (array, index) => index+1);
const avatarId = Array.from({length: 6}, (array, index) => index+1);
const commentId = Array.from({length: 1000}, (array, index) => index+1);

const DESCRIPTIONS = [
  'COZY APARTMENT IN THE HISTORICAL PART OF TBILISI',
  'House on the river, amazing view from the window',
  'Fantastic view of all over Tbilisi (city center)',
  'Entire guesthouse hosted',
];
const NAMES = ['Gocha', 'Gio', 'Levani', 'Kaxa', 'Rezo'];
const MESSAGE = `Всё отлично!
                В целом всё неплохо. Но не всё.
                Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
                Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
                Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
                Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`;


const getRandomUniqueFromArr = function(array){
  const randN = generateRandomN(0, array.length);
  const uniqueN = array[randN];
  array.splice(randN,1);
  return uniqueN;
};

const randPhoto = function() {
  return {
    id: getRandomUniqueFromArr(descId),
    url: `photos/${getRandomUniqueFromArr(photoId)}.jpg`,
    description: DESCRIPTIONS[generateRandomN(0,DESCRIPTIONS.length - 1)],
    likes: generateRandomN(15, 200),
    comments: {
      id: getRandomUniqueFromArr(commentId),
      avatar: `img/avatar-${generateRandomN(1,6)}.svg`,
      message: 'В целом всё неплохо. Но не всё.',
      name: NAMES[generateRandomN(0,NAMES.length - 1)],
    },
  };
};

const randObjects = Array.from({length:RANDOM_OBJECT_NUM}, randPhoto);
