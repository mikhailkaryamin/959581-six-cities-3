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
  reviews,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  getOffersList: (city) => ({
    type: ActionType.GET_OFFERS_LIST,
    payload: getFilteredOffers(city),
  }),

  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
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
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType,
}
