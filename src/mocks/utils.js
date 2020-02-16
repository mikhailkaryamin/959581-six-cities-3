const getRandomNumber = (max, min = 0) => Math.round(
    Math.random() * (max - min) + min
);

const getRandomArray = (elements, lengthArray, isUnique) => {
  let randomArray = [];

  while (randomArray.length < lengthArray) {
    randomArray
      .push(elements[getRandomNumber(elements.length)]);
  }

  if (isUnique) {
    return Array
      .from(
          new Set(randomArray)
      );
  } else {
    return randomArray;
  }
};

const getRandomElement = (elements) => elements[getRandomNumber(elements.length)];

export {
  getRandomArray,
  getRandomNumber,
  getRandomElement
}
