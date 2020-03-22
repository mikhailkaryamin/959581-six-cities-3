import {
  extend
} from "../../utils.js";
import NameSpace from '../name-space.js';
import Comment from '../../adapters/comment.js';
import Offer from '../../adapters/offer.js';
import {
  ActionCreator as ActionCity
} from '../city/city.js';

const initialState = {
  offers: [],
  comments: [],
  offersNearby: [],
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFERS_NEARBY: `LOAD_OFFERS_NEARBY`,
  UPLOAD_COMMENTS: `UPLOAD_COMMENTS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },
  loadOffersNearby: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers,
    };
  },
  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };
  },
  uploadComments: (comments) => {
    return {
      type: ActionType.UPLOAD_COMMENTS,
      payload: comments,
    };
  }
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offers = Offer.parseOffers(response.data);
        dispatch(ActionCreator.loadOffers(offers));
        dispatch(ActionCity.setCurrentCity(offers[0].city.name));
      });
  },
  loadOffersNearby: () => (dispatch, getState, api) => {
    const REQUEST = `/hotels/${getState()[NameSpace.OFFER].activeOffer.id}/nearby`;

    return api.get(REQUEST)
      .then((response) => {
        const offers = Offer.parseOffers(response.data);
        dispatch(ActionCreator.loadOffersNearby(offers));
      });
  },
  loadComments: () => (dispatch, getState, api) => {
    const REQUEST = `/comments/${getState()[NameSpace.OFFER].activeOffer.id}`;

    return api.get(REQUEST)
      .then((response) => {
        const comments = Comment.parseComments(response.data);
        dispatch(ActionCreator.loadComments(comments));
      });
  },
  uploadComments: (comment) => (dispatch, getState, api) => {
    const REQUEST = `/comments/${getState()[NameSpace.OFFER].activeOffer.id}`;

    return api.post(REQUEST, {
      rating: comment.rating,
      comment: comment.text,
    })
      .then((response) => {
        const comments = Comment.parseComments(response.data);
        dispatch(ActionCreator.uploadComments(comments));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
    case ActionType.LOAD_OFFERS_NEARBY:
      return extend(state, {
        offersNearby: action.payload,
      });
    case ActionType.UPLOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
  }

  return state;
};

export {
  reducer,
  ActionType,
  ActionCreator,
  Operation,
};
