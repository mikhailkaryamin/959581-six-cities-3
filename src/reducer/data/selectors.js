import {
  createSelector
} from 'reselect';
import {
  getUniqueArray
} from '../../utils.js';
import {
  MAX_SHOW_COMMENTS
} from '../../consts.js';
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

const getLoadStatus = (state) => {
  return state[NameSpace.DATA].loadStatus;
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

const getSortedCommentsNewOld = createSelector(
    getComments,
    (comments) => comments
      .slice((newComment, oldComment) => new Date(oldComment.date) - new Date(newComment.date))
);

const getCommentsByShow = createSelector(
    getSortedCommentsNewOld,
    (comments) => comments.slice(0, MAX_SHOW_COMMENTS)
);

const getCountComments = createSelector(
    getComments,
    (comments) => comments.length
);

export {
  getOffers,
  getOffersNearby,
  getLocations,
  getOffersCurrentCity,
  getLoadStatus,
  getCommentsByShow,
  getCountComments,
};
