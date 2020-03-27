import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Locations from './locations';
import {
  CURRENT_CITY,
  LOCATIONS,
} from '../../mocks/constsMockTest';

const handleLocationClick = jest.fn();

it(`Render locations correctly`, () => {
  const tree = renderer
    .create(
        <Locations
          currentCity={CURRENT_CITY}
          locations={LOCATIONS}
          handleLocationClick={handleLocationClick}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
