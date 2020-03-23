import React from "react";
import renderer from "react-test-renderer";
import LoginForm from './login-form.jsx';

const login = `Vasya`;
const password = `ezpz`;
const signIn = () => {};
const onChange = () => {};

test(`Login form render correctly`, () => {
  const tree = renderer
    .create(
        <LoginForm
          login={login}
          password={password}
          onChange={onChange}
          signIn={signIn}
        />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
