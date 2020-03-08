import offers from "../mocks/offers.js";
import reviews from "../mocks/reviews.js";
import ActionType from "../actionTypes/actionType.js";
import {
  extend,
} from "../utils.js";
import {
  TypeSort
} from "../consts.js";


const initialOffers = offers;

const initialState = {
  currentCity: initialOffers[0].city.name,
  offers: initialOffers,
  currentSort: TypeSort.POPULAR
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      return extend(state, {
        currentCity: action.payload,
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
