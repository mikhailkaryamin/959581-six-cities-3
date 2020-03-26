import * as React from 'react';
import {
  Route, Redirect
} from 'react-router-dom';
import {
  connect
} from 'react-redux';
import {
  AppRoute
} from '../../consts';
import {
  AuthorizationStatus
} from '../../reducer/user/user';
import {
  getAuthorizationStatus,
} from '../../reducer/user/selectors';

interface Props {
  authStatus: string;
  exact: boolean;
  path: string;
  render: () => void;
}

const PrivateRoute: React.FC<Props> = (props: Props) => {
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

// PrivateRoute.propTypes = {
//   authStatus: string.isRequired,
//   exact: bool.isRequired,
//   path: string.isRequired,
//   render: func.isRequired,
// };

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
});

export {
  PrivateRoute
};

export default connect(mapStateToProps)(PrivateRoute);
