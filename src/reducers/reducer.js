import offers from "../mocks/offers.js";
import reviews from "../mocks/reviews.js";
import {
  SET_CURRENT_CITY,
  GET_OFFERS_LIST,
  SET_ACTIVE_OFFER,
  SET_FOCUS_OFFER,
  REMOVE_FOCUS_OFFER,
  GET_AVAILABLE_OFFERS,
  TOGGLE_SORT_LIST,
  SET_CURRENT_SORT,
  GET_COORDINATES_WITHOUT_FOCUS,
  SET_FOCUS_COORDINATE,
  REMOVE_FOCUS_COORDINATE
} from "../actionTypes/actionType.js";
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
    case SET_CURRENT_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
    case GET_OFFERS_LIST:
      const offersList = getFilteredOffers(action.payload);
      return extend(state, {
        offers: offersList,
      });
    case SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });
    case GET_AVAILABLE_OFFERS:
      return extend(state, {
        availableOffers: state.offers.length,
      });
    case SET_FOCUS_OFFER:
      return extend(state, {
        focusOffer: action.payload,
      });
    case REMOVE_FOCUS_OFFER:
      return extend(state, {
        focusOffer: action.payload,
      });
    case SET_CURRENT_SORT:
      return extend(state, {
        currentSort: action.payload,
      });
    case TOGGLE_SORT_LIST:
      return extend(state, {
        isSortOpen: !action.payload,
      });
    case GET_COORDINATES_WITHOUT_FOCUS:
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
    case SET_FOCUS_COORDINATE:
      return extend(state, {
        focusCoordinate: action.payload,
      });
    case REMOVE_FOCUS_COORDINATE:
      return extend(state, {
        focusCoordinate: action.payload,
      });
  }

  return state;
};

export {
  reducer
};
