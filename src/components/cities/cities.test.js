import React from "react";
import renderer from "react-test-renderer";
import Cities from "./cities.jsx";
import MockDate from "../../mockData.js";

const TEST_HEADLINE_CLICK = () => {};

it(`Render citites`, () => {
  const tree = renderer
    .create(<Cities
      available={MockDate.AVAILABLE}
      descriptions={MockDate.DESCRIPTIONS}
      onHeadlineButtonClick={TEST_HEADLINE_CLICK}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
