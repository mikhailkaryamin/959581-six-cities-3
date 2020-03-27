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
} from '../../mocks/constsMockTest';
import FavoriteItem from './favorite-item';

const mockStore = configureStore([]);

const onCardHover = jest.fn();
const onCardLeave = jest.fn();
const isCurrentCity = true;

test(`Render correctly favorite button`, () => {
  const store = mockStore(Store.WITH_AUTH);
  const tree = renderer.create(
      <Provider
        store={store}
      >
        <BrowserRouter>
          <FavoriteItem
            city={CURRENT_CITY}
            isCurrentCity={isCurrentCity}
            offers={OFFERS}
            onCardHover={onCardHover}
            onCardLeave={onCardLeave}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
