import ActionType from "./actionType.js";

const setCurrentCity = (city) => ({
  type: ActionType.SET_CURRENT_CITY,
  payload: city,
});

const getOffersList = (city) => ({
  type: ActionType.GET_OFFERS_LIST,
  payload: city,
});

const setActiveOffer = (offer) => ({
  type: ActionType.SET_ACTIVE_OFFER,
  payload: offer,
});

const setFocusOffer = (offer) => ({
  type: ActionType.SET_FOCUS_OFFER,
  payload: offer,
});

const removeFocusOffer = () => ({
  type: ActionType.REMOVE_ACTIVE_OFFER,
  payload: null,
});

const getAvailableOffers = () => ({
  type: ActionType.GET_AVAILABLE_OFFERS,
});

export {
  setCurrentCity,
  getOffersList,
  setActiveOffer,
  setFocusOffer,
  removeFocusOffer,
  getAvailableOffers,
};
