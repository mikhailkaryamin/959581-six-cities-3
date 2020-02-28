import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import initialState from "../../mocks/initialState.js";

const mockStore = configureStore([]);

const activeCoordinatesMock = [52.3909553943508, 4.85309666406198];

it(`Render map correctly`, () => {
  const store = mockStore(initialState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <Map
            activeCoordinates={
              activeCoordinatesMock
            }
          />
        </Provider>, {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
