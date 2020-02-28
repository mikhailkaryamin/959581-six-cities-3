import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import initialState from "../../mocks/initialState.js";

const mockStore = configureStore([]);

describe(`App render correctly`, () => {
  it(`App render correctly with active offer`, () => {
    const store = mockStore(initialState);
    const tree = renderer
      .create(
          <Provider
            store={
              store
            }
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
        >
          <App />
        </Provider>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
