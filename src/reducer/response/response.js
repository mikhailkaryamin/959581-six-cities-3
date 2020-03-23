import {
  extend
} from '../../utils.js';

const initialState = {
  responseStatusCode: null,
};

const ActionType = {
  SET_RESPONSE_STATUS_CODE: `SET_RESPONSE_STATUS_CODE`,
  RESET_RESPONSE_STATUS_CODE: `RESET_RESPONSE_STATUS_CODE`,
};

const ActionCreator = {
  setResponseStatusCode: (code) => ({
    type: ActionType.SET_RESPONSE_STATUS_CODE,
    payload: code,
  }),
  resetResponseStatusCode: () => ({
    type: ActionType.RESET_RESPONSE_STATUS_CODE,
    payload: null,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_RESPONSE_STATUS_CODE:
      return extend(state, {
        responseStatusCode: action.payload,
      });
    case ActionType.RESET_RESPONSE_STATUS_CODE:
      return extend(state, {
        responseStatusCode: action.payload,
      });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType
};
