import React,
{
  PureComponent
} from 'react';
import PropTypes from 'prop-types';

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
    this.props.signInUser({
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
          <label className="visually-hidden">E-mail</label>
          <input className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            value={login}
            onChange={onChange}
            required
          />
          <input className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
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
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired,
};

export default LoginForm;
