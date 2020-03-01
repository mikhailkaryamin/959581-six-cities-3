import React from "react";
import renderer from "react-test-renderer";
import {
  Map
} from "./map.jsx";

const coordinatesWithoutActive = [[52.3909553943508, 4.85309666406198], [52.3909553943508, 4.85309666406198]];
const focusCoordinate = [52.3909553943508, 4.85309666406198];

it(`Render map correctly`, () => {
  const tree = renderer
    .create(
        <Map
          coordinatesWithoutActive={
            coordinatesWithoutActive
          }
          focusCoordinate={
            focusCoordinate
          }
        />, {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
