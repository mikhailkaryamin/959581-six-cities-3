import * as React from 'react';
import * as renderer from 'react-test-renderer';
import LoginForm from './login-form';

const login = `Vasya`;
const password = `ezpz`;
const signIn = jest.fn();
const onChange = jest.fn();

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
