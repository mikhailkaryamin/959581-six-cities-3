import {
  reducer,
  ActionType,
  ActionCreator,
} from './city.js';

describe(`City reducer works correctly`, () => {
  test(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      currentCity: `Amsterdam`
    });
  });

  test(`Reducer should set current city`, () => {
    const prevCurrentCity = `PrevCity`;
    const nextCurrentCity = `NextCity`;

    expect(reducer({
      currentCity: prevCurrentCity,
    }, {
      type: ActionType.SET_CURRENT_CITY,
      payload: nextCurrentCity,
    })).toEqual({
      currentCity: nextCurrentCity,
    });
  });
});

describe(`Action creators work correctly`, () => {
  test(`Action creator set current city`, () => {
    const currentCity = `TestCity`;
    expect(ActionCreator.setCurrentCity(currentCity)).toEqual({
      type: ActionType.SET_CURRENT_CITY,
      payload: currentCity,
    });
  });
});
