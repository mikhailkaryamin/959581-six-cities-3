const getRandomNumber = (max, min = 0) => Math.round(
    Math.random() * (max - min) + min
);

const getRandomArray = (elements, lengthArray, isUnique) => {
  let randomArray = [];

  while (randomArray.length < lengthArray) {
    randomArray
      .push(elements[getRandomNumber(elements.length - 1)]);
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

const getRandomElement = (elements) => elements[getRandomNumber(elements.length - 1)];

const getRandomDate = (start, end) => new Date(getRandomNumber(end, start));

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getOffersCurrentCity = (offers, currentCity) => {
  return offers
    .slice()
    .filter((offer) => offer.city === currentCity);
};

const getUniqueArray = (array) => {
  const uniqueSet = new Set(array);

  return Array
    .from(uniqueSet);
};

export {
  getRandomArray,
  getRandomNumber,
  getRandomElement,
  getRandomDate,
  extend,
  getOffersCurrentCity,
  getUniqueArray,
};

