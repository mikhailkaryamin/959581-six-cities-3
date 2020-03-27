import MockAdapter from 'axios-mock-adapter';
import {
  createAPI
} from '../../api.js';
import {
  reducer,
  ActionType,
  Operation
} from "./data.js";
import {
  API_OFFERS,
  API_COMMENTS,
  OFFERS,
  COMMENTS,
} from '../../mocks/constsMockTest.js';
import Offer from '../../models/offer.js';
import Comment from '../../models/comment.js';

const api = createAPI(() => {});

describe(`Data reducer works correctly`, () => {
  test(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      offers: [],
      comments: [],
      offersNearby: [],
      loadStatus: false,
    });
  });

  test(`Reducer should load nearby offers`, () => {
    expect(reducer({
      offers: [],
      comments: [],
      offersNearby: [],
    }, {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: OFFERS,
    })).toEqual({
      offers: [],
      comments: [],
      offersNearby: OFFERS,
    });
  });

  test(`Reducer should load offers`, () => {
    expect(reducer({
      offers: [],
      comments: [],
      offersNearby: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: OFFERS,
    })).toEqual({
      offers: OFFERS,
      comments: [],
      offersNearby: [],
    });
  });

  test(`Reducer should load comments`, () => {
    expect(reducer({
      offers: [],
      comments: [],
      offersNearby: [],
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: COMMENTS,
    })).toEqual({
      offers: [],
      comments: COMMENTS,
      offersNearby: [],
    });
  });
});

describe(`Operation work correctly`, () => {
  test(`Should make a correct API call /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelID = 111;
    const commentsLoader = Operation.loadComments();
    const adaptedApiComments = Comment.parseComments(API_COMMENTS);
    const mockState = () => ({
      OFFER: {
        activeOffer: {
          id: hotelID
        },
      }
    });

    apiMock
      .onGet(`/comments/${hotelID}`)
      .reply(200, API_COMMENTS);

    return commentsLoader(dispatch, mockState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: adaptedApiComments
        });
      });
  });

  test(`Should make a correct API call to /hotels/:id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelID = 111;
    const nearbyOffersLoader = Operation.loadOffersNearby();
    const adaptedApiOffers = Offer.parseOffers(API_OFFERS);
    const mockState = () => ({
      OFFER: {
        activeOffer: {
          id: hotelID
        },
      }
    });

    apiMock
      .onGet(`/hotels/${hotelID}/nearby`)
      .reply(200, API_OFFERS);

    return nearbyOffersLoader(dispatch, mockState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: adaptedApiOffers
        });
      });
  });

  test(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();
    const adaptedApiOffers = Offer.parseOffers(API_OFFERS);

    apiMock
      .onGet(`/hotels`)
      .reply(200, API_OFFERS);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: adaptedApiOffers
        });
      });
  });
});
