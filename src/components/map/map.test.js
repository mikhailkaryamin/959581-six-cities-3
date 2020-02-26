import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";

const mockStore = configureStore([]);

const activeCoordinatesMock = [52.3909553943508, 4.85309666406198];

it(`Render map correctly`, () => {
  const store = mockStore({
    coordinates: [
      [52.3909553943508, 4.85309666406198],
      [52.369553943508, 4.85309666406198],
      [52.3909553943508, 4.929309666406198],
      [52.3809553943508, 4.939309666406198]
    ]
  });
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
