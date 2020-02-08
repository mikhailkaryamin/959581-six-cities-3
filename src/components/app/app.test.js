import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import mockData from "../../mockData.js";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      countPlaces={mockData.countPlaces}
      listOffers={mockData.listOffers}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
