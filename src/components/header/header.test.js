import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";

it(`Render header`, () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
