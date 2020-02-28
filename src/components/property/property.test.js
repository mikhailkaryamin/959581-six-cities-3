import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import initialState from "../../mocks/initialState.js";

const mockStore = configureStore([]);

const handleHeaderOfferClick = () => {};

it(`Render property correctly`, () => {
  const store = mockStore(initialState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <Property
            handleHeaderOfferClick={
              handleHeaderOfferClick
            }
          />
        </Provider>
    )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
