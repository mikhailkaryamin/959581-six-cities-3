import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PlacesSort from './places-sort';

const currentSort = `Popular`;
const isActive = true;
const onToggleClick = jest.fn();
const handleSortChange = jest.fn();

it(`Render places sort`, () => {
  const tree = renderer
    .create(
        <PlacesSort
          currentSort={currentSort}
          isActive={isActive}
          onToggleClick={onToggleClick}
          handleSortChange={handleSortChange}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
