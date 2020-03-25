import React from "react";
import renderer from "react-test-renderer";
import {
  TypeInputLogin
} from '../../consts';
import LoginInput from './login-input';

const onChange = () => {};

describe(`Login input`, () => {
  test(`Login input email render correctly`, () => {
    const value = `vasya@mail.ru`;
    const tree = renderer
      .create(
          <LoginInput
            type={TypeInputLogin.EMAIL}
            value={value}
            onChange={onChange}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Login input password render correctly`, () => {
    const value = `ezpz`;
    const tree = renderer
      .create(
          <LoginInput
            type={TypeInputLogin.PASSWORD}
            value={value}
            onChange={onChange}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


