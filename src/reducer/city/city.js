import {
  extend
} from '../../utils.js';

const initialState = {
  currentCity: `Amsterdam`,
};

const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
};

const ActionCreator = {
  setCurrentCity: (city) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload: city,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType,
};

