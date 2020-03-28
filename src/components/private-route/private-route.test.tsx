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
import PrivateRoute from './private-route';

const mockStore = configureStore([]);
const MockComponent = <div />;
const render = () => MockComponent;

test(`Private route render correctly`, () => {
  const store = mockStore(Store.WITH_AUTH);
  const tree = renderer
      .create(
          <Provider
            store={store}
          >
            <BrowserRouter>
              <PrivateRoute
                exact={true}
                path={``}
                render={render}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});
