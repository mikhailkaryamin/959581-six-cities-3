import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from './app';
import configureStore from 'redux-mock-store';
import {
  Provider
} from 'react-redux';
import {
  storeWithoutActiveOffer
} from '../../mocks/initialState';

const mockStore = configureStore([]);

describe(`App render correctly`, () => {
  it(`App render correctly with active offer`, () => {
    const store = mockStore(storeWithoutActiveOffer);
    const tree = renderer
      .create(
          <Provider
            store={
              store
            }
          >
            <App />
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
