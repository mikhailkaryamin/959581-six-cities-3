import offers from "../mocks/offers.js";
import reviews from "../mocks/reviews.js";
import ActionType from "../actionTypes/actionType.js";
import {
  extend
} from "../utils.js";
import {
  SORTING
} from "../consts.js";

const getFilteredOffers = (city) => {
  return offers
    .slice()
    .filter((offer) => offer.city.name === city);
};

const getCoordinatesWithoutFocus = (offersList, activeID = undefined) => offersList
  .filter((offer) => offer.id !== activeID)
  .map((offer) =>
    offer.coordinate
  );

const initialLocations = Array.from(
    new Set(
        offers
          .map((offer) => offer.city.name
          )
    )
);

const initialCity = initialLocations[0];
const initialOffers = getFilteredOffers(initialCity);
const initialCoordinates = getCoordinatesWithoutFocus(initialOffers);

const initialState = {
  locations: initialLocations,
  currentCity: initialCity,
  offers: initialOffers,
  coordinatesWithoutActive: initialCoordinates,
  availableOffers: initialOffers.length,
  reviews,
  numberReviews: reviews.length,
  currentSort: SORTING[0],
  isSortOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
    case ActionType.GET_OFFERS_LIST:
      const offersList = getFilteredOffers(action.payload);
      return extend(state, {
        offers: offersList,
      });
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });
    case ActionType.GET_AVAILABLE_OFFERS:
      return extend(state, {
        availableOffers: state.offers.length,
      });
    case ActionType.SET_FOCUS_OFFER:
      return extend(state, {
        focusOffer: action.payload,
      });
    case ActionType.REMOVE_FOCUS_OFFER:
      return extend(state, {
        focusOffer: action.payload,
      });
    case ActionType.SET_CURRENT_SORT:
      return extend(state, {
        currentSort: action.payload,
      });
    case ActionType.TOGGLE_SORT_LIST:
      return extend(state, {
        isSortOpen: !action.payload,
      });
    case ActionType.GET_COORDINATES_WITHOUT_FOCUS:
      if (state.focusOffer) {
        const activeID = state.focusOffer.id;
        const coordinatesWithoutActive = getCoordinatesWithoutFocus(state.offers, activeID);

        return extend(state, {
          coordinatesWithoutActive
        });
      }
      return extend(state, {
        coordinatesWithoutActive: getCoordinatesWithoutFocus(state.offers)
      });
    case ActionType.SET_FOCUS_COORDINATE:
      return extend(state, {
        focusCoordinate: action.payload,
      });
    case ActionType.REMOVE_FOCUS_COORDINATE:
      return extend(state, {
        focusCoordinate: action.payload,
      });
  }

  return state;
};

export {
  reducer
};
