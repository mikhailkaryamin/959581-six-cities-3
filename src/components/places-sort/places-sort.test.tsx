import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {
  CURRENT_SORT,
} from '../../mocks/constsMockTest';
import PlacesSort from './places-sort';

const isActive = true;
const onToggleClick = jest.fn();
const handleSortChange = jest.fn();

test(`Render places sort`, () => {
  const tree = renderer
    .create(
        <PlacesSort
          currentSort={CURRENT_SORT}
          isActive={isActive}
          onToggleClick={onToggleClick}
          handleSortChange={handleSortChange}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
