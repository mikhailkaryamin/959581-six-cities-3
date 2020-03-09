import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Main render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          isEmpty={false}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Main empty render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          isEmpty={true}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
