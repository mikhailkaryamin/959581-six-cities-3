import {
  reducer
} from "./reducer.js";
import {
  offers,
  activeOffer
} from "../mocks/initialState.js";
import ActionType from "../actionTypes/actionType.js";

test(`Reducer should set current city`, () => {
  expect(reducer({
    currentCity: `Amsterdam`,
  }, {
    type: ActionType.SET_CURRENT_CITY,
    payload: `Amsterdam`
  }));
});

test(`Reducer should get offers list`, () => {
  expect(reducer({
    offersList: offers,
  }, {
    type: ActionType.GET_OFFERS_LIST,
    payload: offers
  }));
});

test(`Reducer should set active offer`, () => {
  expect(reducer({
    activeOffer,
  }, {
    type: ActionType.SET_ACTIVE_OFFER,
    payload: activeOffer
  }));
});

test(`Reducer should focus offer`, () => {
  expect(reducer({
    focusOffer: activeOffer,
  }, {
    type: ActionType.SET_FOCUS_OFFER,
    payload: activeOffer
  }));
});

test(`Reducer should remove focus offer`, () => {
  expect(reducer({
    focusOffer: undefined,
  }, {
    type: ActionType.REMOVE_FOCUS_OFFER,
    payload: undefined
  }));
});

test(`Reducer should set current sort`, () => {
  expect(reducer({
    currentSort: `Popular`,
  }, {
    type: ActionType.SET_CURRENT_SORT,
    payload: `Popular`
  }));
});

test(`Reducer should toggle sort list`, () => {
  expect(reducer({
    isSortOpen: true,
  }, {
    type: ActionType.TOGGLE_SORT_LIST,
    payload: false
  }));
});

test(`Reducer should get coordinates without focus`, () => {
  expect(reducer({
    coordinatesWithoutActive: [52.3909553943508, 4.85309666406198],
  }, {
    type: ActionType.GET_COORDINATES_WITHOUT_FOCUS,
    payload: [52.3909553943508, 4.85309666406198]
  }));
});

test(`Reducer should set focus coordinate`, () => {
  expect(reducer({
    focusCoordinate: [52.3909553943508, 4.85309666406198],
  }, {
    type: ActionType.SET_FOCUS_COORDINATE,
    payload: [52.3909553943508, 4.85309666406198]
  }));
});

test(`Reducer should remove focus coordinate`, () => {
  expect(reducer({
    focusCoordinate: undefined,
  }, {
    type: ActionType.REMOVE_FOCUS_COORDINATE,
    payload: undefined
  }));
});

test(`Reducer should get available offers`, () => {
  expect(reducer({
    availableOffers: 312,
  }, {
    type: ActionType.GET_AVAILABLE_OFFERS,
    payload: 312
  }));
});

