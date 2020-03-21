import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../login-form/login-form.jsx';
import withAuthorization from '../../hocs/with-authorization/with-authorization.js';

const LoginFormWrapped = withAuthorization(LoginForm);

const Login = (props) => {
  const {
    signInUser,
    currentCity
  } = props;

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">
            Sign in
          </h1>
          <LoginFormWrapped
            signInUser={signInUser}
          />
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>
                {currentCity}
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

Login.propTypes = {
  currentCity: PropTypes.string.isRequired,
  signInUser: PropTypes.func.isRequired,
  responseStatusCode: PropTypes.number.isRequired,
};

export default Login;
