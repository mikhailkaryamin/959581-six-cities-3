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
  CURRENT_SORT,
  ONE_OFFER,
  LOCATIONS,
} from '../../mocks/constsMockTest';
import {
  Main
} from './main';

const mockStore = configureStore([]);

const handleLocationClick = jest.fn();
const handleSortChange = jest.fn();
const onCardHover = jest.fn();
const onCardLeave = jest.fn();

describe(`Main render correctly`, () => {
  test(`Main render correctly AUTH`, () => {
    const store = mockStore(Store.WITH_AUTH);
    const tree = renderer
      .create(
          <Provider
            store={store}
          >
            <BrowserRouter>
              <Main
                currentCityOffers={OFFERS}
                currentCity={CURRENT_CITY}
                currentSort={CURRENT_SORT}
                focusOffer={ONE_OFFER}
                handleLocationClick={handleLocationClick}
                handleSortChange={handleSortChange}
                locations={LOCATIONS}
                onCardHover={onCardHover}
                onCardLeave={onCardLeave}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Main render correctly NO AUTH`, () => {
    const store = mockStore(Store.NO_AUTH);
    const tree = renderer
      .create(
          <Provider
            store={store}
          >
            <BrowserRouter>
              <Main
                currentCityOffers={OFFERS}
                currentCity={CURRENT_CITY}
                currentSort={CURRENT_SORT}
                focusOffer={ONE_OFFER}
                handleLocationClick={handleLocationClick}
                handleSortChange={handleSortChange}
                locations={LOCATIONS}
                onCardHover={onCardHover}
                onCardLeave={onCardLeave}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

