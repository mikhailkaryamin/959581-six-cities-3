import React from "react";
import renderer from "react-test-renderer";
import Locatons from "./locations.jsx";

const locations = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];
const currentCity = `Paris`;
const handleLocationClick = () => {};
const handleActiveItem = () => {};

it(`Render locations correctly`, () => {
  const tree = renderer
    .create(
        <Locatons
          currentCity={currentCity}
          locations={locations}
          handleLocationClick={handleLocationClick}
          handleActiveItem={handleActiveItem}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
