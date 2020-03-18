import {
  reducer,
  ActionType,
  ActionCreator,
} from './offer.js';

describe(`Offer reducer works correctly`, () => {
  test(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      activeOffer: undefined,
      focusOffer: undefined,
    });
  });

  test(`Reducer should set active offer`, () => {
    const nextActiveOffer = `nextActiveOffer`;

    expect(reducer({
      activeOffer: undefined,
      focusOffer: undefined,
    }, {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: nextActiveOffer,
    })).toEqual({
      activeOffer: nextActiveOffer,
      focusOffer: undefined,
    });
  });

  test(`Reducer should set focus offer`, () => {
    const nextFocusOffer = `FocusOffer`;

    expect(reducer({
      activeOffer: undefined,
      focusOffer: undefined,
    }, {
      type: ActionType.SET_FOCUS_OFFER,
      payload: nextFocusOffer,
    })).toEqual({
      activeOffer: undefined,
      focusOffer: nextFocusOffer,
    });
  });
});

describe(`Action creators work correctly`, () => {
  test(`Action creator set active offer`, () => {
    const activeOffer = `activeOffer`;
    expect(ActionCreator.setActiveOffer(activeOffer)).toEqual({
      type: ActionType.SET_ACTIVE_OFFER,
      payload: activeOffer,
    });
  });

  test(`Action creator set focus offer`, () => {
    const focusOffer = `focusOffer`;
    expect(ActionCreator.setFocusOffer(focusOffer)).toEqual({
      type: ActionType.SET_FOCUS_OFFER,
      payload: focusOffer,
    });
  });
});
