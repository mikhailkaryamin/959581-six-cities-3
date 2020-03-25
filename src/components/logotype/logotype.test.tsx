import React from "react";
import renderer from "react-test-renderer";
import {
  BrowserRouter
} from 'react-router-dom';
import Logotype from "./logotype";

it(`Render logo correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Logotype />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
