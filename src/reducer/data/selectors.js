import {
  createSelector
} from 'reselect';
import {
  getUniqueArray
} from '../../utils.js';
import NameSpace from '../name-space.js';

const getCurrentCity = (state) => {
  return state[NameSpace.CITY].currentCity;
};

const getComments = (state) => {
  return state[NameSpace.DATA].comments;
};

const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

const getOffersNearby = (state) => {
  return state[NameSpace.DATA].offersNearby;
};

const getLocations = createSelector(
    getOffers,
    (offers) => {
      const locations = offers
        .map((offer) => offer.city.name);
      return getUniqueArray(locations);
    }
);

const getOffersCurrentCity = createSelector(
    getOffers,
    getCurrentCity,

    (offers, currentCity) => {
      return offers
        .filter((offer) => offer.city.name === currentCity);
    }
);

export {
  getOffers,
  getComments,
  getOffersNearby,
  getLocations,
  getOffersCurrentCity,
};
