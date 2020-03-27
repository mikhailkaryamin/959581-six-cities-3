import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {
  Provider
} from 'react-redux';
import {
  BrowserRouter
} from 'react-router-dom';
import {
  Store
} from '../../mocks/initialStateTest';
import {
  OFFERS,
  CURRENT_CITY,
  LOCATIONS,
  USER,
} from '../../mocks/constsMockTest';
import {
  AuthorizationStatus
} from '../../reducer/user/user';
import {
  Favorites
} from './favorites';

const mockStore = configureStore([]);

const authStatus = AuthorizationStatus.AUTH;
const onCardHover = jest.fn();
const onCardLeave = jest.fn();

test(`Favorites render correctly`, () => {
  const store = mockStore(Store.WITH_AUTH);
  const tree = renderer
    .create(
        <Provider
          store={store}
        >
          <BrowserRouter>
            <Favorites
              authStatus={authStatus}
              currentCity={CURRENT_CITY}
              favorites={OFFERS}
              favoritesLocations={LOCATIONS}
              onCardHover={onCardHover}
              onCardLeave={onCardLeave}
              user={USER}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
