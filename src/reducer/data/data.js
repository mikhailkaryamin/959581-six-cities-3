import {
  extend
} from "../../utils.js";
import NameSpace from '../name-space.js';
import Comment from '../../adapters/comment.js';
import Offer from '../../adapters/offer.js';

const initialState = {
  offers: [],
  comments: [],
  offersNearby: [],
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_OFFERS_NEARBY: `LOAD_OFFERS_NEARBY`,
};

const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },
  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };
  },
  loadOffersNearby: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers,
    };
  }
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offers = Offer.parseOffers(response.data);
        dispatch(ActionCreator.loadOffers(offers));
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
  loadOffersNearby: () => (dispatch, getState, api) => {
    const REQUEST = `/hotels/${getState()[NameSpace.OFFER].activeOffer.id}/nearby`;

    return api.get(REQUEST)
      .then((response) => {
        const offers = Offer.parseOffers(response.data);
        dispatch(ActionCreator.loadOffersNearby(offers));
      });
  }
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
  }

  return state;
};

export {
  reducer,
  ActionType,
  ActionCreator,
  Operation,
};
