import {
  reducer,
  ActionType
} from './response.js';

describe(`Response reducer works correctly`, () => {
  test(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      responseStatusCode: null
    });
  });

  test(`Reducer should set response status`, () => {
    expect(reducer({
      responseStatusCode: null
    }, {
      type: ActionType.SET_RESPONSE_STATUS_CODE,
      payload: 200
    })).toEqual({
      responseStatusCode: 200
    });
  });

  test(`Reducer should reset error status`, () => {
    expect(reducer({
      responseStatusCode: 404
    }, {
      type: ActionType.RESET_RESPONSE_STATUS_CODE,
      payload: null
    })).toEqual({
      responseStatusCode: null
    });
  });
});
