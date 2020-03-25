import React from 'react';
import {
  configure,
  shallow
} from 'enzyme';
import {
  TypeInputLogin
} from '../../consts';
import Adapter from 'enzyme-adapter-react-16';
import LoginInput from './login-input';

configure({
  adapter: new Adapter(),
});

test(`should LoginInput inputs change`, () => {
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
