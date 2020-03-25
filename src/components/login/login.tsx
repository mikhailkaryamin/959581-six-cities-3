import React from 'react';
import {
  Redirect
} from 'react-router-dom';
import {
  AppRoute
} from '../../consts';
import {
  bool,
  func,
  string,
} from 'prop-types';

import withAuthorization from '../../hocs/with-authorization/with-authorization';
import LoginForm from '../login-form/login-form';

const LoginFormWrapped = withAuthorization(LoginForm);

const Login = (props) => {
  const {
    currentCity,
    isAuth,
    signIn,
  } = props;

  return (
    <React.Fragment>
      {isAuth &&
        <Redirect to={AppRoute.ROOT}/>
      }
      {isAuth ||
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">
                Sign in
              </h1>
              <LoginFormWrapped
                signIn={signIn}
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
      }
    </React.Fragment>
  );
};

Login.propTypes = {
  currentCity: string.isRequired,
  signIn: func.isRequired,
  isAuth: bool.isRequired,
};

export default Login;
