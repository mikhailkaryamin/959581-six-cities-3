import React from "react";
import renderer from "react-test-renderer";
import Logotype from "./logotype.jsx";

it(`Render logo correctly`, () => {
  const tree = renderer
    .create(
        <Logotype />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
