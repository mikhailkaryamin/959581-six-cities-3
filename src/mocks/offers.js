import {
  Offer
} from "./constsMock.js";
import {
  getRandomArray,
  getRandomNumber,
  getRandomElement
} from "../utils.js";

const {Max} = Offer;

const offers = [];

for (let i = 0; i < Offer.NUMBER_OFFERS; i++) {
  offers.push({
    id: getRandomNumber(Max.ID),
    city: {
      name: getRandomElement(Offer.CITIES),
    },
    src: getRandomArray(Offer.SRC, Max.IMAGES),
    price: getRandomNumber(Max.PRICE),
    rating: getRandomNumber(Max.RATING),
    name: getRandomElement(Offer.NAMES),
    type: getRandomElement(Offer.TYPES),
    mark: Boolean(getRandomNumber(1)),
    insideItems: getRandomArray(Offer.INSIDE_ITEMS, Offer.INSIDE_ITEMS.length, true),
    coordinate: Offer.COORDINATES[i],
  });
}

export default offers;
