import offers from "./mocks/offers.js";
import reviews from "./mocks/reviews.js";

const getFilteredOffers = (city) => {
  return offers
    .slice()
    .filter((offer) => offer.city.name === city)
}

const getCoordinates = (offersList) => offersList.map((offer) => offer.coordinate);

const initialLocations = Array.from(
  new Set(
    offers
      .map((offer) => offer.city.name
  )
));

const initialCity = initialLocations[0];
const initialOffers = getFilteredOffers(initialCity);
const initialCoordinates = getCoordinates(initialOffers);

const initialState = {
  locations: initialLocations,
  currentCity: initialCity,
  offers: initialOffers,
  coordinates: initialCoordinates,
  availableOffers: initialOffers.length,
  reviews,
  numberReviews: reviews.length
};

const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  SET_FOCUS_OFFER: `SET_FOCUS_OFFER`,
  REMOVE_ACTIVE_OFFER: `REMOVE_ACTIVE_OFFER`,
  GET_AVAILABLE_OFFERS: `GET_AVAILABLE_OFFERS`,
};

const ActionCreator = {
  setCurrentCity: (city) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload: city,
  }),

  getOffersList: (city) => ({
    type: ActionType.GET_OFFERS_LIST,
    payload: getFilteredOffers(city),
  }),

  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer,
  }),

  setFocusOffer: (offer) => ({
    type: ActionType.SET_FOCUS_OFFER,
    payload: offer,
  }),

  removeFocusOffer: () => ({
    type: ActionType.REMOVE_ACTIVE_OFFER,
    payload: null,
  }),

  getAvailableOffers: () => ({
    type: ActionType.GET_AVAILABLE_OFFERS,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload,
      }
    case ActionType.GET_OFFERS_LIST:
      return {
        ...state,
        offers: action.payload,
      }
    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: action.payload,
      }
    case ActionType.GET_AVAILABLE_OFFERS:
      return {
        ...state,
        availableOffers: state.offers.length,
      }
    case ActionType.SET_FOCUS_OFFER:
      return {
        ...state,
        focusOffer: action.payload,
      }
    case ActionType.REMOVE_FOCUS_OFFER:
      return {
        ...state,
        focusOffer: action.payload,
      }
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType,
}
