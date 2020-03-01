import {
  reducer
} from "./reducer.js";
import {
  offers,
  activeOffer
} from "../mocks/initialState.js";
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

test(`Reducer should set current city`, () => {
  expect(reducer({
    currentCity: `Amsterdam`,
  }, {
    type: SET_CURRENT_CITY,
    payload: `Amsterdam`
  }));
});

test(`Reducer should get offers list`, () => {
  expect(reducer({
    offersList: offers,
  }, {
    type: GET_OFFERS_LIST,
    payload: offers
  }));
});

test(`Reducer should set active offer`, () => {
  expect(reducer({
    activeOffer,
  }, {
    type: SET_ACTIVE_OFFER,
    payload: activeOffer
  }));
});

test(`Reducer should focus offer`, () => {
  expect(reducer({
    focusOffer: activeOffer,
  }, {
    type: SET_FOCUS_OFFER,
    payload: activeOffer
  }));
});

test(`Reducer should remove focus offer`, () => {
  expect(reducer({
    focusOffer: undefined,
  }, {
    type: REMOVE_FOCUS_OFFER,
    payload: undefined
  }));
});

test(`Reducer should set current sort`, () => {
  expect(reducer({
    currentSort: `Popular`,
  }, {
    type: SET_CURRENT_SORT,
    payload: `Popular`
  }));
});

test(`Reducer should toggle sort list`, () => {
  expect(reducer({
    isSortOpen: true,
  }, {
    type: TOGGLE_SORT_LIST,
    payload: false
  }));
});

test(`Reducer should get coordinates without focus`, () => {
  expect(reducer({
    coordinatesWithoutActive: [52.3909553943508, 4.85309666406198],
  }, {
    type: GET_COORDINATES_WITHOUT_FOCUS,
    payload: [52.3909553943508, 4.85309666406198]
  }));
});

test(`Reducer should set focus coordinate`, () => {
  expect(reducer({
    focusCoordinate: [52.3909553943508, 4.85309666406198],
  }, {
    type: SET_FOCUS_COORDINATE,
    payload: [52.3909553943508, 4.85309666406198]
  }));
});

test(`Reducer should remove focus coordinate`, () => {
  expect(reducer({
    focusCoordinate: undefined,
  }, {
    type: REMOVE_FOCUS_COORDINATE,
    payload: undefined
  }));
});

test(`Reducer should set current city`, () => {
  expect(reducer({
    availableOffers: 312,
  }, {
    type: GET_AVAILABLE_OFFERS,
    payload: 312
  }));
});

