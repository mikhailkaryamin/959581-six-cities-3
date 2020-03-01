import React from "react";
import renderer from "react-test-renderer";
import {
  PlacesSort
} from "./places-sort.jsx";

const handleTypeClick = () => {};
const handleListClick = () => {};
const currentSort = `Popular`;
const isSortOpen = true;

it(`Render places sort`, () => {
  const tree = renderer
    .create(
        <PlacesSort
          handleTypeClick={
            handleTypeClick
          }
          handleListClick={
            handleListClick
          }
          currentSort={
            currentSort
          }
          isSortOpen={
            isSortOpen
          }
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
