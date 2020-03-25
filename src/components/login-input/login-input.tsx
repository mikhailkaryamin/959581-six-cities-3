import React from 'react';
import {
  func,
  string,
} from 'prop-types';
import {
  TypeInputLogin
} from '../../consts';

const LoginInput = (props) => {
  const {
    onChange,
    type,
    value,
  } = props;

  const PLACEHOLDER = type === TypeInputLogin.EMAIL ? `Email` : `Password`;

  return (
    <input className="login__input form__input"
      type={type}
      name={type}
      placeholder={PLACEHOLDER}
      value={value}
      onChange={onChange}
      required
    />
  );
};

LoginInput.propTypes = {
  onChange: func.isRequired,
  type: string.isRequired,
  value: string.isRequired,
};

export default LoginInput;
