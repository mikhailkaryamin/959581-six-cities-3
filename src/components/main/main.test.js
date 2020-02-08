import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import mockData from "../../mockData.js";

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Main
      countPlaces={mockData.countPlaces}
      listOffers={mockData.listOffers}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
