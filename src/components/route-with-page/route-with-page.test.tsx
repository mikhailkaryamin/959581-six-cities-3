import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import {
  BrowserRouter
} from 'react-router-dom';
import {
  Store
} from '../../mocks/initialStateTest';
import {
  AppRoute,
} from '../../consts';
import RouteWithPage from './route-with-page';

const mockStore = configureStore([]);
const MockComponent = <div />;

describe(`Route with page`, () => {
  test(`With AUTH`, () => {
    const store = mockStore(Store.WITH_AUTH);
    const tree = renderer
      .create(
          <Provider
            store={store}
          >
            <BrowserRouter>
              <RouteWithPage
                exact={true}
                path={AppRoute.ROOT}
                component={MockComponent}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Without AUTH`, () => {
    const store = mockStore(Store.NO_AUTH);
    const tree = renderer
      .create(
          <Provider
            store={store}
          >
            <BrowserRouter>
              <RouteWithPage
                exact={true}
                path={AppRoute.ROOT}
                component={MockComponent}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

