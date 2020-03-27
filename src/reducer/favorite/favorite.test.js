import MockAdapter from 'axios-mock-adapter';
import {
  createAPI
} from '../../api.js';
import {
  reducer,
  ActionType,
  Operation
} from './favorite.js';
import {
  API_OFFERS,
  OFFERS,
} from '../../mocks/constsMockTest';
import Offer from '../../models/offer.js';

const api = createAPI(() => {});

describe(`Favorite reducer works correctly`, () => {
  test(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      favorites: []
    });
  });

  test(`Reducer should load favorites`, () => {
    expect(reducer({
      favorites: []
    }, {
      type: ActionType.LOAD_FAVORITES,
      payload: OFFERS
    })).toEqual({
      favorites: OFFERS
    });
  });

  test(`Reducer should add favorite`, () => {
    const initialFavorites = OFFERS.slice(1, 6);
    const newFavorite = OFFERS[0];
    expect(reducer({
      favorites: initialFavorites
    }, {
      type: ActionType.ADD_FAVORITE,
      payload: newFavorite
    })).toEqual({
      favorites: OFFERS
    });
  });

  test(`Reducer should remove favorite`, () => {
    const updatedFavorites = OFFERS.slice(0, 3);
    expect(reducer({
      favorites: OFFERS
    }, {
      type: ActionType.REMOVE_FAVORITE,
      payload: OFFERS[3]
    })).toEqual({
      favorites: updatedFavorites
    });
  });
});

describe(`Operation work correctly`, () => {
  test(`Should make a correct API call to /favorite`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = Operation.loadFavorites();
    const adaptedApiMockOffers = Offer.parseOffers(API_OFFERS);
    apiMock
      .onGet(`/favorite`)
      .reply(200, API_OFFERS);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: adaptedApiMockOffers
        });
      });
  });

  test(`Should make a correct API call to /favorite/:id/0.5 to add`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesUpdater = Operation.addFavorite();
    const FAVORITE_ID = 1;
    const mockState = () => ({
      OFFER: {
        activeOffer: {
          id: FAVORITE_ID
        },
      }
    });
    const adaptedApiMockOffer = Offer.parseOffer(API_OFFERS[0]);
    apiMock
      .onPost(`/favorite/1/0.5`)
      .reply(200, API_OFFERS[0]);

    return favoritesUpdater(dispatch, mockState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_FAVORITE,
          payload: adaptedApiMockOffer
        });
      });
  });

  test(`Should make a correct API call to /favorite/:id/0 to remove`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesRemover = Operation.removeFavorite();
    const FAVORITE_ID = 1;
    const mockState = () => ({
      OFFER: {
        activeOffer: {
          id: FAVORITE_ID
        },
      }
    });
    const notFavoriteOffer = Object.assign({}, API_OFFERS[0], {'is_favorite': false});
    const adaptedNotFavoriteOffer = Offer.parseOffer(notFavoriteOffer);

    apiMock
      .onPost(`/favorite/1/0`)
      .reply(200, notFavoriteOffer);

    return favoritesRemover(dispatch, mockState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REMOVE_FAVORITE,
          payload: adaptedNotFavoriteOffer
        });
      });
  });
});
