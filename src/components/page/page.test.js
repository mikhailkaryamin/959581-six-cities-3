import React from "react";
import renderer from "react-test-renderer";
import {
  BrowserRouter
} from 'react-router-dom';
import Page from "./page.jsx";
import {
  user,
} from '../../mocks/testMock.js';

test(`Render correctly page`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Page
            isAuth={false}
            user={user}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
