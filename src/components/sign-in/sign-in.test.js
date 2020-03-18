import React from 'react';
import renderer from "react-test-renderer";
import SignIn from './sign-in.jsx';

const currentCity = `Paris`;

test(`Render correctly sign in`, () => {
  const tree = renderer
  .create(
      <SignIn
        currentCity={currentCity}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
