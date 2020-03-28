import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from './app';
import configureStore from 'redux-mock-store';
import {
  Provider
} from 'react-redux';
import {
  Store,
} from '../../mocks/initialStateTest';

const mockStore = configureStore([]);

describe(`App render correctly`, () => {
  test(`App render correctly AUTH`, () => {
    const store = mockStore(Store.WITH_AUTH);
    const tree = renderer
      .create(
          <Provider
            store={store}
          >
            <App />
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test(`App render correctly NO AUTH`, () => {
    const store = mockStore(Store.NO_AUTH);
    const tree = renderer
      .create(
          <Provider
            store={store}
          >
            <App />
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
