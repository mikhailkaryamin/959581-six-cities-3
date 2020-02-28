import React from "react";
import renderer from "react-test-renderer";
import Places from "./places.jsx";
import {
  Provider
} from "react-redux";
import configureStore from "redux-mock-store";
import initialState from "../../mocks/initialState.js";

const mockStore = configureStore([]);
const modificatorClass = `cities__places`;

it(`Render places correctly`, () => {
  const store = mockStore(initialState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <Places
            modificatorClass={
              modificatorClass
            }
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
