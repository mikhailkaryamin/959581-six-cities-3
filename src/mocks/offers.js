import {
  OfferParameters
} from "./consts.js";
import {
  getRandomArray,
  getRandomNumber,
  getRandomElement
} from "./utils.js";

const offers = [
  {
    id: getRandomNumber(OfferParameters.MAX_ID),
    src: getRandomArray(OfferParameters.SRC, OfferParameters.MAX_IMAGES),
    price: getRandomNumber(OfferParameters.MAX_PRICE),
    rating: getRandomNumber(OfferParameters.MAX_RATING),
    name: getRandomElement(OfferParameters.NAMES),
    description: OfferParameters.DESCRIPTION,
    type: getRandomElement(OfferParameters.TYPES),
    mark: Boolean(getRandomNumber(1)),
    insideItems: getRandomArray(OfferParameters.INSIDE_ITEMS, OfferParameters.INSIDE_ITEMS.length, true),
    coordinate: OfferParameters.COORDINATES[0],
  },
  {
    id: getRandomNumber(OfferParameters.MAX_ID),
    src: getRandomArray(OfferParameters.SRC, OfferParameters.MAX_IMAGES),
    price: getRandomNumber(OfferParameters.MAX_PRICE),
    rating: getRandomNumber(OfferParameters.MAX_RATING),
    name: getRandomElement(OfferParameters.NAMES),
    description: OfferParameters.DESCRIPTION,
    type: getRandomElement(OfferParameters.TYPES),
    mark: Boolean(getRandomNumber(1)),
    insideItems: getRandomArray(OfferParameters.INSIDE_ITEMS, OfferParameters.INSIDE_ITEMS.length, true),
    coordinate: OfferParameters.COORDINATES[1],
  },
  {
    id: getRandomNumber(OfferParameters.MAX_ID),
    src: getRandomArray(OfferParameters.SRC, OfferParameters.MAX_IMAGES),
    price: getRandomNumber(OfferParameters.MAX_PRICE),
    rating: getRandomNumber(OfferParameters.MAX_RATING),
    name: getRandomElement(OfferParameters.NAMES),
    description: OfferParameters.DESCRIPTION,
    type: getRandomElement(OfferParameters.TYPES),
    mark: Boolean(getRandomNumber(1)),
    insideItems: getRandomArray(OfferParameters.INSIDE_ITEMS, OfferParameters.INSIDE_ITEMS.length, true),
    coordinate: OfferParameters.COORDINATES[2],
  },
  {
    id: getRandomNumber(OfferParameters.MAX_ID),
    src: getRandomArray(OfferParameters.SRC, OfferParameters.MAX_IMAGES),
    price: getRandomNumber(OfferParameters.MAX_PRICE),
    rating: getRandomNumber(OfferParameters.MAX_RATING),
    name: getRandomElement(OfferParameters.NAMES),
    description: OfferParameters.DESCRIPTION,
    type: getRandomElement(OfferParameters.TYPES),
    mark: Boolean(getRandomNumber(1)),
    insideItems: getRandomArray(OfferParameters.INSIDE_ITEMS, OfferParameters.INSIDE_ITEMS.length, true),
    coordinate: OfferParameters.COORDINATES[3],
  }
];

export default offers;
