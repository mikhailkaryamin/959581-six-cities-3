import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  CURRENT_CITY,
  LOCATIONS,
} from '../../mocks/constsMockTest';
import Locations from './locations';

configure({
  adapter: new Adapter(),
});

test(`When user press click location`, () => {
  const handleLocationClick = jest.fn();

  const locationsScreen = shallow(
      <Locations
        currentCity={CURRENT_CITY}
        locations={LOCATIONS}
        handleLocationClick={handleLocationClick}
      />
  );

  const locationButton = locationsScreen.find(`.locations__item`);
  locationButton.first().simulate(`click`);
  expect(handleLocationClick.mock.calls[0][0]).toEqual(LOCATIONS[0]);
  expect(handleLocationClick.mock.calls.length).toBe(1);
});
