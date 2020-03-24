import React from 'react';
import {
  Route, Redirect
} from 'react-router-dom';
import {
  connect
} from 'react-redux';
import {
  bool,
  func,
  string,
} from 'prop-types';
import {
  AppRoute
} from '../../consts.js';
import {
  AuthorizationStatus
} from '../../reducer/user/user.js';
import {
  getAuthorizationStatus,
} from '../../reducer/user/selectors.js';

const PrivateRoute = (props) => {
  const {
    authStatus,
    exact,
    path,
    render,
  } = props;

  const isAuth = authStatus === AuthorizationStatus.AUTH;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isAuth
            ? render()
            : <Redirect to={{
              pathname: AppRoute.LOGIN,
              state: {
                from: routeProps.location
              }
            }}
            />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authStatus: string.isRequired,
  exact: bool.isRequired,
  path: string.isRequired,
  render: func.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
});

export {
  PrivateRoute
};

export default connect(mapStateToProps)(PrivateRoute);
