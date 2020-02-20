import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const coordinatesMock = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198]
];

it(`Render map correctly`, () => {
  const tree = renderer
    .create(
        <Map
          coordinates={coordinatesMock}
        />, {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
