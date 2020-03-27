import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Locations from './locations';

const locations = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];
const currentCity = `Paris`;

configure({
  adapter: new Adapter(),
});

test(`When user press click location`, () => {
  const handleLocationClick = jest.fn();

  const locationsScreen = shallow(
      <Locations
        currentCity={currentCity}
        locations={locations}
        handleLocationClick={handleLocationClick}
      />
  );

  const locationButton = locationsScreen.find(`.locations__item`);
  locationButton.first().simulate(`click`);
  expect(handleLocationClick.mock.calls[0][0]).toEqual(locations[0]);
  expect(handleLocationClick.mock.calls.length).toBe(1);
});
