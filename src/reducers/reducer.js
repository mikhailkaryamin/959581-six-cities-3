import offers from "../mocks/offers.js";
import reviews from "../mocks/reviews.js";
import ActionType from "../actionTypes/actionType.js";
import {
  extend,
  getOffersCurrentCity
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

const initialState = {
  locations: initialLocations,
  currentCity: initialCity,
  offers: initialOffers,
  availableOffers: initialOffers.length,
  numberReviews: reviews.length,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        offers: getOffersCurrentCity(state.offers, state.currentCity),
      });
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });
    case ActionType.SET_FOCUS_OFFER:
      return extend(state, {
        focusOffer: action.payload,
      });
    case ActionType.SET_CURRENT_SORT:
      return extend(state, {
        currentSort: action.payload,
      });
  }

  return state;
};

export {
  reducer
};
