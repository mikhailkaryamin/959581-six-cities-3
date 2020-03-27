import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  mount
} from 'enzyme';
import {
  Property
} from './property';
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
  ONE_OFFER,
  COMMENTS,
} from '../../mocks/constsMockTest';
import {
  Store
} from '../../mocks/initialStateTest';
import {
  AuthorizationStatus
} from '../../reducer/user/user';

configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

const onCardHover = jest.fn();
const onCardLeave = jest.fn();
const onLoadDataProperty = jest.fn();
const onCommentSubmit = jest.fn();
const responseStatus = 200;
const countComments = 3;
const authStatus = AuthorizationStatus.AUTH;

describe(`Render property correctly`, () => {
  test(`Render property WITH AUTH correctly`, () => {
    const store = mockStore(Store.WITH_AUTH);
    const tree = mount(
        <Provider
          store={store}
        >
          <BrowserRouter>
            <Property
              currentSort={CURRENT_SORT}
              countComments={countComments}
              focusOffer={ONE_OFFER}
              onCardHover={onCardHover}
              onCardLeave={onCardLeave}
              responseStatus={responseStatus}
              offersNearby={OFFERS}
              activeOffer={ONE_OFFER}
              comments={COMMENTS}
              onLoadDataProperty={onLoadDataProperty}
              authStatus={authStatus}
              onCommentSubmit={onCommentSubmit}
            />
          </BrowserRouter>
        </Provider>
    ).html();
    expect(tree).toMatchSnapshot();
  });

  test(`Render property NO AUTH correctly`, () => {
    const store = mockStore(Store.NO_AUTH);
    const tree = mount(
        <Provider
          store={store}
        >
          <BrowserRouter>
            <Property
              currentSort={CURRENT_SORT}
              countComments={countComments}
              focusOffer={ONE_OFFER}
              onCardHover={onCardHover}
              onCardLeave={onCardLeave}
              responseStatus={responseStatus}
              offersNearby={OFFERS}
              activeOffer={ONE_OFFER}
              comments={COMMENTS}
              onLoadDataProperty={onLoadDataProperty}
              authStatus={authStatus}
              onCommentSubmit={onCommentSubmit}
            />
          </BrowserRouter>
        </Provider>
    ).html();
    expect(tree).toMatchSnapshot();
  });
});
