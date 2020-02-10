import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import MockData from "../../mockData.js";

const TEST_HEADLINE_CLICK = () => {};

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Main
      available={MockData.AVAILABLE}
      descriptions={MockData.DESCRIPTIONS}
      onHeadlineButtonClick={TEST_HEADLINE_CLICK}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
