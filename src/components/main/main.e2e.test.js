import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";
import Main from "./main.jsx";
import mockData from "../../mockData.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const onHeadlineButtonClick = jest.fn();

  const mainScreen = shallow(
      <Main
        countPlaces={mockData.countPlaces}
        listOffers={mockData.listOffers}
        onHeadlineButtonClick={onHeadlineButtonClick}
      />
  );

  const headlineButtons = mainScreen.find(`.place-card__name`);

  headlineButtons.map((node) => node.props().onClick());

  expect(onHeadlineButtonClick.mock.calls.length).toBe(5);
});

