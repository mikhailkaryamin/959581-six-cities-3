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
  OFFERS,
  CURRENT_CITY,
  CURRENT_SORT,
} from '../../mocks/constsMockTest';
import {
  Store
} from '../../mocks/initialStateTest';
import {
  ClassModificator
} from '../../consts';
import Places from './places';

const mockStore = configureStore([]);

const onCardHover = jest.fn();
const onCardLeave = jest.fn();
const handleSortChange = jest.fn();

test(`Render places (modificator - cities) correctly`, () => {
  const store = mockStore(Store.WITH_AUTH);
  const tree = renderer
    .create(
        <Provider
          store={store}
        >
          <BrowserRouter>
            <Places
              classModificator={ClassModificator.CITIES_PLACES}
              currentCityOffers={OFFERS}
              currentCity={CURRENT_CITY}
              currentSort={CURRENT_SORT}
              onCardHover={onCardHover}
              handleSortChange={handleSortChange}
              onCardLeave={onCardLeave}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

test(`Render places (modificator - near) correctly`, () => {
  const store = mockStore(Store.WITH_AUTH);
  const tree = renderer
    .create(
        <Provider
          store={store}
        >
          <BrowserRouter>
            <Places
              classModificator={ClassModificator.NEAR_PLACES}
              currentCityOffers={OFFERS}
              currentSort={CURRENT_SORT}
              onCardHover={onCardHover}
              onCardLeave={onCardLeave}
            />
          </BrowserRouter>
        </Provider>

    ).toJSON();

  expect(tree).toMatchSnapshot();
});
