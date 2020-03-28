import {
  extend
} from '../../utils.js';
import Offer from '../../models/offer.js';
import NameSpace from '../name-space.js';

const initialState = {
  favorites: [],
};

const ActionType = {
  ADD_FAVORITE: `ADD_FAVORITE`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  REMOVE_FAVORITE: `REMOVE_FAVORITE`,
};

const ActionCreator = {
  addFavorite: (favoriteOffer) => ({
    type: ActionType.ADD_FAVORITE,
    payload: favoriteOffer,
  }),
  loadFavorites: (favoriteOffers) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favoriteOffers,
  }),
  removeFavorite: (favoriteOffer) => ({
    type: ActionType.REMOVE_FAVORITE,
    payload: favoriteOffer,
  })
};

const Operation = {
  addFavorite: () => (dispatch, getState, api) => {
    const status = 0.5;
    let id;
    if (getState()[NameSpace.OFFER].focusOffer !== null) {
      id = getState()[NameSpace.OFFER].focusOffer.id;
    } else {
      id = getState()[NameSpace.OFFER].activeOffer.id;
    }

    return api.post(`/favorite/${id}/${status}`, {
      'hotel_id': id,
      'status': status
    })
      .then((response) => {
        const favoriteOffer = Offer.parseOffer(response.data);
        dispatch(ActionCreator.addFavorite(favoriteOffer));
      });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const favoriteOffers = Offer.parseOffers(response.data);
        dispatch(ActionCreator.loadFavorites(favoriteOffers));
      });
  },

  removeFavorite: () => (dispatch, getState, api) => {
    const status = 0;
    let id;
    if (getState()[NameSpace.OFFER].focusOffer !== null) {
      id = getState()[NameSpace.OFFER].focusOffer.id;
    } else {
      id = getState()[NameSpace.OFFER].activeOffer.id;
    }

    return api.post(`/favorite/${id}/${status}`, {
      'hotel_id': id,
      'status': status
    })
      .then((response) => {
        const favoriteOffer = Offer.parseOffer(response.data);
        dispatch(ActionCreator.removeFavorite(favoriteOffer));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload
      });
    case ActionType.ADD_FAVORITE:
      return extend(state, {
        favorites: [action.payload, ...state.favorites]
      });
    case ActionType.REMOVE_FAVORITE:
      return extend(state, {
        favorites: state.favorites
          .filter((offer) => offer.id !== action.payload.id)
      });
    default:
      return state;
  }
};

export {
  reducer,
  Operation,
  ActionType,
  ActionCreator,
};
