import React from "react";
import Enzyme, {
  shallow
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  Locations
} from "./locations.jsx";

const LOCATIONS = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

Enzyme.configure({
  adapter: new Adapter(),
});

test(`When user press click location`, () => {
  const handleLocationClick = jest.fn();
  const locationsScreen = shallow(
      <Locations
        locations={
          LOCATIONS
        }
        handleLocationClick={
          handleLocationClick
        }
      />
  );

  const locationButton = locationsScreen.find(`.locations__item`);
  locationButton.first().simulate(`click`);
  expect(handleLocationClick.mock.calls[0][0]).toEqual(LOCATIONS[0]);
  expect(handleLocationClick.mock.calls.length).toBe(1);
});
