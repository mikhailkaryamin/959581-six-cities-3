import offers from "./mocks/offers.js";
import reviews from "./mocks/reviews.js";
import ActionType from "./actionType.js";

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload,
      }
    case ActionType.GET_OFFERS_LIST:
      const offersList = getFilteredOffers(action.payload);
      return {
        ...state,
        offers: offersList,
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
  reducer
}
