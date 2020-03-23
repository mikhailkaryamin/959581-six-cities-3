import React,
{
  PureComponent
} from 'react';
import {
  func,
  string,
} from 'prop-types';
import {
  TypeInputLogin
} from '../../consts.js';
import LoginInput from '../login-input/login-input.jsx';

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {
      login,
      password,
    } = this.props;
    this.props.signIn({
      login,
      password,
    });
  }

  render() {
    const {
      login,
      password,
      onChange,
    } = this.props;

    return (
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={this._handleSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">
            E-mail
          </label>
          <LoginInput
            onChange={onChange}
            type={TypeInputLogin.EMAIL}
            value={login}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">
            Password
          </label>
          <LoginInput
            onChange={onChange}
            type={TypeInputLogin.PASSWORD}
            value={password}
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
        >
          Sign in
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: string.isRequired,
  password: string.isRequired,
  onChange: func.isRequired,
  signIn: func.isRequired,
};

export default LoginForm;
