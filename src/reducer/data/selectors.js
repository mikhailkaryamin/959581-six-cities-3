import {
  createSelector
} from 'reselect';
import {
  getUniqueArray
} from '../../utils.js';
import NameSpace from '../name-space.js';

const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

const getCurrentCity = (state) => {
  return state[NameSpace.CITY].currentCity;
};

export const getComments = (state) => {
  return state[NameSpace.DATA].comments;
};

export const getOffersNearby = (state) => {
  return state[NameSpace.DATA].offersNearby;
};

export const getLocations = createSelector(
    getOffers,
    (offers) => {
      const locations = offers
        .map((offer) => offer.city.name);
      return getUniqueArray(locations);
    }
);

export const getOffersCurrentCity = createSelector(
    getOffers,
    getCurrentCity,

    (offers, currentCity) => {
      return offers
        .filter((offer) => offer.city.name === currentCity);
    }
);
