import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {
  BrowserRouter
} from 'react-router-dom';
import {
  user,
} from '../../mocks/constsMockTest';
import Header from './header';

test(`Render header correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Header
            isAuth={false}
            user={user}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
