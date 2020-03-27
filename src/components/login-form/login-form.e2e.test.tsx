import * as React from 'react';
import {
  configure,
  mount
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import LoginForm from './login-form';

configure({
  adapter: new Adapter(),
});

describe(`LoginForm`, () => {
  test(`should LoginForm change input`, () => {
    const onChange = jest.fn();
    const signIn = jest.fn();
    const wrapper = mount(
        <LoginForm
          login={``}
          password={``}
          onChange={onChange}
          signIn={signIn}
        />
    );
    wrapper.find(`input`).at(0).simulate(`change`, {
      target: {name: `email`, value: `vasya@mail.ru`}
    });
    wrapper.find(`input`).at(1).simulate(`change`, {
      target: {name: `password`, value: `ezPz`}
    });
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  test(`should LoginForm pressed submit and check send obj`, () => {
    const onChange = jest.fn();
    const signIn = jest.fn();
    const wrapper = mount(
        <LoginForm
          login={`vasya@mail.ru`}
          password={`ezpz`}
          onChange={onChange}
          signIn={signIn}
        />
    );
    wrapper.find(`form`).simulate(`submit`);
    expect(signIn).toHaveBeenCalledTimes(1);
    expect(signIn.mock.calls[0][0]).toMatchObject({
      login: `vasya@mail.ru`,
      password: `ezpz`
    });
  });
});
