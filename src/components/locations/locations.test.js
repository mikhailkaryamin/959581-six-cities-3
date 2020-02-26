import React from "react";
import renderer from "react-test-renderer";
import Locatons from "./locations.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";

const mockStore = configureStore([]);

const handleLocationClick = () => {};
it(`Render locations correctly`, () => {
  const store = mockStore({
    locations: [
      `Paris`,
      `Cologne`,
      `Brussels`,
      `Amsterdam`,
      `Hamburg`,
      `Dusseldorf`
    ]
  });
  const tree = renderer
    .create(
        <Provider store={
          store
        }>
          <Locatons
            handleLocationClick={
              handleLocationClick
            }
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
