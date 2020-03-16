import {
  extend
} from '../../utils.js';
import User from '../../adapters/user.js';

const DEFAULT_USER = {
  id: -1,
  name: ``,
  email: ``,
  isPro: false,
  avatarUrl: ``
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: DEFAULT_USER,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SIGN_IN_USER: `SIGN_IN_USER`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  signInUser: (user) => ({
    type: ActionType.SIGN_IN_USER,
    payload: user,
  })
};

const onUserSignInSuccess = (response, dispatch) => {
  const user = User.parseUser(response.data);
  dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
  dispatch(ActionCreator.signInUser(user));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SIGN_IN_USER:
      return extend(state, {
        user: action.payload
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        onUserSignInSuccess(response, dispatch);
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        onUserSignInSuccess(response, dispatch);
      });
  },
};

export {
  ActionCreator,
  ActionType,
  reducer,
  AuthorizationStatus,
  Operation,
  DEFAULT_USER,
};
