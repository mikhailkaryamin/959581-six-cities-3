import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import MockData from "../../mockData.js";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      available={MockData.AVAILABLE}
      descriptions={MockData.DESCRIPTIONS}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
