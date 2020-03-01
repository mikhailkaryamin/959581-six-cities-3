import React from "react";
import Enzyme, {
  shallow
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  PlacesSort
} from "./places-sort.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const currentSort = `Popular`;
const isSortOpen = true;

describe(`Clicks places sort`, () => {
  let handleTypeClick;
  let handleListClick;
  let placesSortScr;

  beforeEach(() => {
    handleTypeClick = jest.fn();
    handleListClick = jest.fn();

    placesSortScr = shallow(
        <PlacesSort
          currentSort={
            currentSort
          }
          handleListClick={
            handleListClick
          }
          handleTypeClick={
            handleTypeClick
          }
          isSortOpen={
            isSortOpen
          }
        />
    );
  });

  test(`Click sort list`, () => {
    const placesSortElement = placesSortScr.find(`.places__sorting`);
    placesSortElement.simulate(`click`);
    expect(handleListClick.mock.calls[0][0]).toEqual(true);
    expect(handleListClick.mock.calls.length).toBe(1);
  });

  test(`Click sort type`, () => {
    const placesSortElement = placesSortScr.find(`.places__option`);
    placesSortElement.first().simulate(`click`);
    expect(handleTypeClick).toHaveBeenCalled();
    expect(handleTypeClick.mock.calls.length).toBe(1);
  });
});
