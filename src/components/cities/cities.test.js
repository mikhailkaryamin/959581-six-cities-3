import React from "react";
import renderer from "react-test-renderer";
import Cities from "./cities.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import initialState from "../../mocks/initialState.js";

const mockStore = configureStore([]);

it(`Render citites correctly`, () => {
  const store = mockStore(initialState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <Cities />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
