import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {
  BrowserRouter
} from 'react-router-dom';
import Page from './page';
import {
  USER,
} from '../../mocks/constsMockTest';

test(`Render correctly page`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Page
            isAuth={false}
            user={USER}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
