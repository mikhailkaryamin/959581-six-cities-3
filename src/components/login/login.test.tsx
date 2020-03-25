import React from 'react';
import renderer from "react-test-renderer";
import {
  BrowserRouter
} from 'react-router-dom';
import Login from './login';

const currentCity = `Paris`;
const isAuth = true;
const signIn = () => {};

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
