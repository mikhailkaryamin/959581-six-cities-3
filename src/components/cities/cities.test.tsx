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
  ONE_OFFER,
  CURRENT_SORT,
  CURRENT_CITY,
} from '../../mocks/constsMockTest';
import Cities from './cities';

const mockStore = configureStore([]);

const handleSortChange = jest.fn();
const onCardHover = jest.fn();
const onCardLeave = jest.fn();

test(`Render cities correctly`, () => {
  const store = mockStore(Store.WITH_AUTH);
  const tree = renderer
    .create(
        <Provider
          store={store}
        >
          <BrowserRouter>
            <Cities
              currentCityOffers={OFFERS}
              currentSort={CURRENT_SORT}
              currentCity={CURRENT_CITY}
              focusOffer={ONE_OFFER}
              handleSortChange={handleSortChange}
              onCardHover={onCardHover}
              onCardLeave={onCardLeave}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
