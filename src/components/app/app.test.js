import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import initialState from "../../mocks/initialState.js";

const mockStore = configureStore([]);
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
};

describe(`App render correctly`, () => {
  it(`App render correctly with active offer`, () => {
    const store = mockStore(initialState);
    const tree = renderer
      .create(
          <Provider
            store={
              store
            }
            activeOffer={activeOffer}
            handleLocationClick={() => {}}
            handleHeaderOfferClick={() => {}}
            onCardHover={() => {}}
            handleSortChange={() => {}}
          >
            <App />
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`App render correctly without active offer`, () => {
    const store = mockStore(initialState);
    const tree = renderer
    .create(
        <Provider
          store={
            store
          }
          activeOffer={undefined}
          handleLocationClick={() => {}}
          handleHeaderOfferClick={() => {}}
          onCardHover={() => {}}
          handleSortChange={() => {}}
        >
          <App />
        </Provider>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
