import React from 'react';
import renderer from "react-test-renderer";
import Login from './login.jsx';

const currentCity = `Paris`;

test(`Render correctly sign in`, () => {
  const tree = renderer
  .create(
      <Login
        currentCity={currentCity}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
