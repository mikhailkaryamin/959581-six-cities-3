import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";
import PlaceCard from "./place-card.jsx";

const TEST_DESCRIPTION = `Test text`;

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should headline button click`, () => {
  const onHeadlineButtonClick = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        description={TEST_DESCRIPTION}
        onHeadlineButtonClick={onHeadlineButtonClick}
      />
  );

  const headlineButton = placeCard.find(`.place-card__name`);

  headlineButton.props().onClick();

  expect(onHeadlineButtonClick.mock.calls.length).toBe(1);
});

