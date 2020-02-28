import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import initialState from "../../mocks/initialState.js";

const mockStore = configureStore([]);


it(`Render correctly reviews list`, () => {
  const store = mockStore(initialState);
  const tree = renderer
    .create(
        <Provider
          store={
            store
          }
        >
          <ReviewsList
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
