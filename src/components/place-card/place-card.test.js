import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import initialState from "../../mocks/initialState.js";

const mockStore = configureStore([]);
const handleHeaderOfferClick = () => {};
const handlePlaceCardMouseEnter = () => {};
const handlePlaceCardMouseLeave = () => {};
const offer = {
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
  type: `Apartment`,
  mark: true,
};

it(`Render place card`, () => {
  const store = mockStore(initialState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <PlaceCard
            handleHeaderOfferClick={
              handleHeaderOfferClick
            }
            onMouseEnter={
              handlePlaceCardMouseEnter
            }
            onMouseLeave={
              handlePlaceCardMouseLeave
            }
            offer={
              offer
            }
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
