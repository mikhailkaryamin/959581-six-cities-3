import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

it(`Render logo correctly`, () => {
  const tree = renderer
    .create(
        <Map />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
