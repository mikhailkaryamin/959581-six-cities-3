import React from "react";
import renderer from "react-test-renderer";
import Page from "./page.jsx";

test(`Render correctly page`, () => {
  const tree = renderer
    .create(
        <Page />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
