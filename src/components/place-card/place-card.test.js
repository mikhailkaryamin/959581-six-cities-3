import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const TEST_DESCRIPTION = `Test text`;
const TEST_HEADLINE_CLICK = () => {};

it(`Render place card`, () => {
  const tree = renderer
    .create(<PlaceCard
      description={TEST_DESCRIPTION}
      onHeadlineButtonClick={TEST_HEADLINE_CLICK}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
