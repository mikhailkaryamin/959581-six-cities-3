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
} from "../../mocks/initialStateTest";
import {
  OFFERS,
  LOCATIONS,
} from '../../mocks/constsMockTest';
import FavoritesList from './favorites-list';

const mockStore = configureStore([]);
const onCardHover = jest.fn();
const onCardLeave = jest.fn();

test(`Favorites list render correctly`, () => {
  const store = mockStore(Store.WITH_AUTH);
  const tree = renderer
    .create(
        <Provider
          store={store}
        >
          <BrowserRouter>
            <FavoritesList
              currentCity={OFFERS}
              favorites={OFFERS}
              favoritesLocations={LOCATIONS}
              onCardHover={onCardHover}
              onCardLeave={onCardLeave}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
