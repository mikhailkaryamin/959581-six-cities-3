import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {
  BrowserRouter
} from 'react-router-dom';
import {
  CURRENT_CITY,
} from '../../mocks/constsMockTest';
import Login from './login';

const isAuth = true;
const signIn = jest.fn();

test(`Render correctly sign in`, () => {
  const tree = renderer
  .create(
      <BrowserRouter>
        <Login
          currentCity={CURRENT_CITY}
          isAuth={isAuth}
          signIn={signIn}
        />
      </BrowserRouter>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
