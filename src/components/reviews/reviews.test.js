import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import initialState from "../../mocks/initialState.js";
import Reviews from "./reviews.jsx";

const mockStore = configureStore([]);

test(`Render reviews`, () => {
  const store = mockStore(initialState);
  const tree = renderer
    .create(
        <Provider
          store={
            store
          }
        >
          <Reviews />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
