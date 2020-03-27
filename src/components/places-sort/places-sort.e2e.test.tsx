import * as React from 'react';
import {
  configure,
  shallow
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import PlacesSort from './places-sort';

configure({
  adapter: new Adapter(),
});

const currentSort = `Popular`;
const isActive = true;

describe(`Clicks places sort`, () => {
  let onToggleClick;
  let handleSortChange;
  let placesSortScr;

  beforeEach(() => {
    onToggleClick = jest.fn();
    handleSortChange = jest.fn();

    placesSortScr = shallow(
        <PlacesSort
          currentSort={currentSort}
          isActive={isActive}
          onToggleClick={onToggleClick}
          handleSortChange={handleSortChange}
        />
    );
  });

  test(`Click sort list`, () => {
    const placesSortElement = placesSortScr.find(`.places__sorting`);
    placesSortElement.simulate(`click`);
    expect(onToggleClick).toHaveBeenCalled();
    expect(onToggleClick.mock.calls.length).toBe(1);
  });

  test(`Click sort type`, () => {
    const placesSortElement = placesSortScr.find(`.places__option`);
    placesSortElement.first().simulate(`click`);
    expect(handleSortChange).toHaveBeenCalled();
    expect(handleSortChange.mock.calls.length).toBe(1);
  });
});
