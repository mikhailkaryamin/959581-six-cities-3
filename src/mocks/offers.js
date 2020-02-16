import {
  OfferParameters
} from "./consts.JS";
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
    mark: `Premium`,
    insideItems: getRandomArray(OfferParameters.INSIDE_ITEMS, OfferParameters.INSIDE_ITEMS.length),
  },
  {
    id: getRandomNumber(OfferParameters.MAX_ID),
    src: getRandomArray(OfferParameters.SRC, OfferParameters.MAX_IMAGES),
    price: getRandomNumber(OfferParameters.MAX_PRICE),
    rating: getRandomNumber(OfferParameters.MAX_RATING),
    name: getRandomElement(OfferParameters.NAMES),
    description: OfferParameters.DESCRIPTION,
    type: getRandomElement(OfferParameters.TYPES),
    mark: `Premium`,
    insideItems: getRandomArray(OfferParameters.INSIDE_ITEMS, OfferParameters.INSIDE_ITEMS.length),
  },
  {
    id: getRandomNumber(OfferParameters.MAX_ID),
    src: getRandomArray(OfferParameters.SRC, OfferParameters.MAX_IMAGES),
    price: getRandomNumber(OfferParameters.MAX_PRICE),
    rating: getRandomNumber(OfferParameters.MAX_RATING),
    name: getRandomElement(OfferParameters.NAMES),
    description: OfferParameters.DESCRIPTION,
    type: getRandomElement(OfferParameters.TYPES),
    mark: `Premium`,
    insideItems: getRandomArray(OfferParameters.INSIDE_ITEMS, OfferParameters.INSIDE_ITEMS.length),
  },
  {
    id: getRandomNumber(OfferParameters.MAX_ID),
    src: getRandomArray(OfferParameters.SRC, OfferParameters.MAX_IMAGES),
    price: getRandomNumber(OfferParameters.MAX_PRICE),
    rating: getRandomNumber(OfferParameters.MAX_RATING),
    name: getRandomElement(OfferParameters.NAMES),
    description: OfferParameters.DESCRIPTION,
    type: getRandomElement(OfferParameters.TYPES),
    mark: `Premium`,
    insideItems: getRandomArray(OfferParameters.INSIDE_ITEMS, OfferParameters.INSIDE_ITEMS.length),
  }
];

export default offers;
