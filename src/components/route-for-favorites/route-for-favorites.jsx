import React from 'react';
import {
  Route, Redirect
} from 'react-router-dom';
import {
  connect
} from 'react-redux';
import PropTypes from 'prop-types';
import {
  AppRoute
} from '../../consts.js';
import {
  AuthorizationStatus
} from '../../reducer/user/user.js';
import {
  getAuthorizationStatus,
} from '../../reducer/user/selectors.js';

const RouteForFavorites = (props) => {
  const {
    render,
    path,
    exact,
    authStatus
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

RouteForFavorites.propTypes = {
  authStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
});

export {
  RouteForFavorites
};

export default connect(mapStateToProps)(RouteForFavorites);
