import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {
  BrowserRouter
} from 'react-router-dom';
import Page from './page';
import {
  user,
} from '../../mocks/testMock';

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
