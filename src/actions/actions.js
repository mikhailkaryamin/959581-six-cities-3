import ActionType from "../actionTypes/actionType.js";

const setCurrentCity = (city) => ({
  type: ActionType.SET_CURRENT_CITY,
  payload: city,
});

const getOffersList = () => ({
  type: ActionType.GET_OFFERS_LIST,
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
  type: ActionType.REMOVE_FOCUS_OFFER,
  payload: undefined,
});

const getAvailableOffers = () => ({
  type: ActionType.GET_AVAILABLE_OFFERS,
});

const setCurrentSort = (sort) => ({
  type: ActionType.SET_CURRENT_SORT,
  payload: sort,
});

const toggleSortList = (state) => ({
  type: ActionType.TOGGLE_SORT_LIST,
  payload: state
});

const getCoordinatesWithoutActive = () => ({
  type: ActionType.GET_COORDINATES_WITHOUT_FOCUS,
});

const setFocusCoordinate = (coordinate) => ({
  type: ActionType.SET_FOCUS_COORDINATE,
  payload: coordinate,
});

const removeFocusCoordinate = () => ({
  type: ActionType.REMOVE_FOCUS_COORDINATE,
  payload: undefined
});

export {
  setCurrentCity,
  getOffersList,
  setActiveOffer,
  setFocusOffer,
  removeFocusOffer,
  getAvailableOffers,
  setCurrentSort,
  toggleSortList,
  getCoordinatesWithoutActive,
  setFocusCoordinate,
  removeFocusCoordinate,
};
