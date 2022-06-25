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
// Get Random Uniuqe elment from Array
const getRandomUniqueFromArr = function(array){
  const randN = generateRandomN(0, array.length);
  const uniqueN = array[randN];
  array.splice(randN,1);
  return uniqueN;
};
// Get Multiple unique element from array
function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
export {generateRandomN, getRandomUniqueFromArr, getMultipleRandom};
