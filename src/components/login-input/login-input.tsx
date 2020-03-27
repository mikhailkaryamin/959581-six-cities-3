import * as React from 'react';
import {
  TypeInputLogin
} from '../../consts';

interface Props {
  onChange: () => void;
  type: string;
  value: string;
}

const LoginInput: React.FC<Props> = (props: Props) => {
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

export default LoginInput;
