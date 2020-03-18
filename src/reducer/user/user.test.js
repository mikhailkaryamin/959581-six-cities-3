import {
  reducer,
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  DEFAULT_USER,
} from './user.js';

describe(`User reducer works correctly`, () => {
  test(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: DEFAULT_USER
    });
  });

  it(`Reducer should change authorizationStatus by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: DEFAULT_USER
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: DEFAULT_USER
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: DEFAULT_USER
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: DEFAULT_USER
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: DEFAULT_USER
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: DEFAULT_USER
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: DEFAULT_USER
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: DEFAULT_USER
    });
  });

  it(`Reducer should set user`, () => {
    const nextUser = {
      id: 1,
      email: `gg@wp.com`,
      name: `GG`,
      isPro: true,
      avatarUrl: `test`
    };
    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: DEFAULT_USER
    }, {
      type: ActionType.SIGN_IN_USER,
      payload: nextUser
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: nextUser
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    });
  });
});
