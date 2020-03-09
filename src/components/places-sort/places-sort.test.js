import React from "react";
import renderer from "react-test-renderer";
import PlacesSort from "./places-sort.jsx";

const currentSort = `Popular`;
const isActive = true;
const onToggleClick = () => {};
const handleSortChange = () => {};

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
