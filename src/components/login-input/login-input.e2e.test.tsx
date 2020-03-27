import * as React from 'react';
import {
  configure,
  shallow
} from 'enzyme';
import {
  TypeInputLogin
} from '../../consts';
import * as Adapter from 'enzyme-adapter-react-16';
import LoginInput from './login-input';

configure({
  adapter: new Adapter(),
});

describe(`Login input e2e test`, () => {
  test(`should LoginInput input email change`, () => {
    const onChange = jest.fn();
    const wrapper = shallow(
        <LoginInput
          type={TypeInputLogin.EMAIL}
          value={`vasya@mail.ru`}
          onChange={onChange}
        />
    );
    wrapper.find(`input`).at(0).simulate(`change`);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test(`should LoginInput input password change`, () => {
    const onChange = jest.fn();
    const wrapper = shallow(
        <LoginInput
          type={TypeInputLogin.PASSWORD}
          value={`ezpz`}
          onChange={onChange}
        />
    );
    wrapper.find(`input`).at(0).simulate(`change`);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});


