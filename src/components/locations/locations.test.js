import React from "react";
import renderer from "react-test-renderer";
import Locatons from "./locations.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import initialState from "../../mocks/initialState.js";

const mockStore = configureStore([]);

const handleLocationClick = () => {};
it(`Render locations correctly`, () => {
  const store = mockStore(initialState);
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
