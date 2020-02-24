import {
  Reviews,
} from "./constsMock.js";
import {
  MS_IN_WEEK
} from "../consts.js";
import {
  getRandomNumber,
  getRandomElement,
  getRandomDate
} from "../utils.js";

const NUMBER_REVIEWS = getRandomNumber(Reviews.MAX_REVIEWS);
const reviews = [];

for (let i = 0; i < NUMBER_REVIEWS; i++) {
  reviews.push(
      {
        id: i,
        user: {
          id: i,
          isPro: Boolean(getRandomNumber(1)),
          name: getRandomElement(Reviews.NAMES),
          avatarURL: getRandomElement(Reviews.AVATARS)
        },
        rating: getRandomNumber(Reviews.MAX_RATING),
        comment: getRandomElement(Reviews.COMMENT),
        date: getRandomDate(Date.now() - MS_IN_WEEK, Date.now())
      }
  );
}

const reviewsSortDate = reviews.sort((a, b) => a.date - b.date);

export default reviewsSortDate;
