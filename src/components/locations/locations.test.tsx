import * as React from 'react';
import * as renderer from 'react-test-renderer';
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
const handleLocationClick = jest.fn();

it(`Render locations correctly`, () => {
  const tree = renderer
    .create(
        <Locations
          currentCity={currentCity}
          locations={locations}
          handleLocationClick={handleLocationClick}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
