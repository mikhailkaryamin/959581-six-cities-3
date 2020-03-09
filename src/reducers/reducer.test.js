import {
  reducer
} from "./reducer.js";
import ActionType from "../actionTypes/actionType.js";

const focusOffer = {
  id: 123,
  src: [
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`,
    `img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
  ],
  price: 120,
  rating: 4,
  name: `Beautiful &amp; luxurious apartment at great location`,
  description: `An independent House, strategically located between Rembrand Square and National Opera,`
  + ` but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  type: `Apartment`,
  mark: true,
  insideItems: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ],
  coordinate: [52.3909553943508, 4.85309666406198],
  city: {
    name: `Paris`
  }
};
const activeOffer = {
  id: 123,
  src: [
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`,
    `img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
  ],
  price: 120,
  rating: 4,
  name: `Beautiful &amp; luxurious apartment at great location`,
  description: `An independent House, strategically located between Rembrand Square and National Opera,`
  + ` but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  type: `Apartment`,
  mark: true,
  insideItems: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ],
  coordinate: [52.3909553943508, 4.85309666406198],
  city: {
    name: `Paris`
  }
};

test(`Reducer should set current city`, () => {
  expect(reducer({
    currentCity: `Amsterdam`,
  }, {
    type: ActionType.SET_CURRENT_CITY,
    payload: `Amsterdam`
  })).toEqual({
    currentCity: `Amsterdam`,
  });
});


test(`Reducer should set active offer`, () => {
  expect(reducer({
    activeOffer,
  }, {
    type: ActionType.SET_ACTIVE_OFFER,
    payload: activeOffer
  })).toEqual({
    activeOffer,
  });
});

test(`Reducer should focus offer`, () => {
  expect(reducer({
    focusOffer,
  }, {
    type: ActionType.SET_FOCUS_OFFER,
    payload: activeOffer
  })).toEqual({
    focusOffer,
  });
});

test(`Reducer should set current sort`, () => {
  expect(reducer({
    currentSort: `Popular`,
  }, {
    type: ActionType.SET_CURRENT_SORT,
    payload: `Popular`
  })).toEqual({
    currentSort: `Popular`,
  });
});

