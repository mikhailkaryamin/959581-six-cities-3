import React from "react";
import renderer from "react-test-renderer";
import Locatons from "./locations.jsx";

it(`Render locations`, () => {
  const tree = renderer
    .create(<Locatons/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
