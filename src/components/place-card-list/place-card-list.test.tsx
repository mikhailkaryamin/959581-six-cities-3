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
  CURRENT_SORT,
} from '../../mocks/constsMockTest';
import {
  Store
} from '../../mocks/initialStateTest';
import PlacesList from './place-card-list';

const mockStore = configureStore([]);

const CLASS_MODIFICATOR = ``;
const onCardHover = jest.fn();
const onCardLeave = jest.fn();

test(`Render places-list correctly`, () => {
  const store = mockStore(Store.WITH_AUTH);
  const tree = renderer
    .create(
        <Provider
          store={store}
        >
          <BrowserRouter>
            <PlacesList
              classModificator={CLASS_MODIFICATOR}
              currentSort={CURRENT_SORT}
              currentCityOffers={OFFERS}
              onCardHover={onCardHover}
              onCardLeave={onCardLeave}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
