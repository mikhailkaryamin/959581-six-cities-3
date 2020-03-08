import ActionType from "../actionTypes/actionType.js";

const setCurrentCity = (city) => ({
  type: ActionType.SET_CURRENT_CITY,
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

const setCurrentSort = (sort) => ({
  type: ActionType.SET_CURRENT_SORT,
  payload: sort,
});


export {
  setCurrentCity,
  setActiveOffer,
  setFocusOffer,
  setCurrentSort,
};
