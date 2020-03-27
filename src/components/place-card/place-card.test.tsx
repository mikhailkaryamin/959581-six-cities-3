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
  ONE_OFFER,
} from '../../mocks/constsMockTest';
import {
  Store
} from '../../mocks/initialStateTest';
import PlaceCard from './place-card';

const mockStore = configureStore([]);

const CLASS_MODIFICATOR = ``;
const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();

test(`Render place card`, () => {
  const store = mockStore(Store.WITH_AUTH);
  const tree = renderer
    .create(
        <Provider
          store={store}
        >
          <BrowserRouter>
            <PlaceCard
              classModificator={CLASS_MODIFICATOR}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              offer={ONE_OFFER}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
