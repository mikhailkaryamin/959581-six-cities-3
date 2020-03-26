import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {
  BrowserRouter
} from 'react-router-dom';
import Login from './login';

const currentCity = `Paris`;
const isAuth = true;
const signIn = jest.fn();

test(`Render correctly sign in`, () => {
  const tree = renderer
  .create(
      <BrowserRouter>
        <Login
          currentCity={currentCity}
          isAuth={isAuth}
          signIn={signIn}
        />
      </BrowserRouter>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
