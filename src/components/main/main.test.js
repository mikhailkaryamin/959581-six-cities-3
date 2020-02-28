import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import configurStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import initialState from "../../mocks/initialState.js";

const mockStore = configurStore([]);

it(`Main render correctly`, () => {
  const store = mockStore(initialState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
