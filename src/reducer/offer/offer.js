import {
  extend
} from '../../utils.js';

const initialState = {
  activeOffer: undefined,
  focusOffer: undefined,
};

const ActionType = {
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  SET_FOCUS_OFFER: `SET_FOCUS_OFFER`,
};

const ActionCreator = {
  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer,
  }),

  setFocusOffer: (offer) => ({
    type: ActionType.SET_FOCUS_OFFER,
    payload: offer,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });
    case ActionType.SET_FOCUS_OFFER:
      return extend(state, {
        focusOffer: action.payload,
      });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType,
};
