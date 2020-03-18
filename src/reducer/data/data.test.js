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
  currentCityOffers,
  comments,
  apiOffers,
  apiComments,
} from '../../mocks/testMock.js';
import Offer from '../../adapters/offer.js';
import Comment from '../../adapters/comment.js';

const api = createAPI(() => {});

describe(`Data reducer works correctly`, () => {
  test(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      offers: [],
      comments: [],
      offersNearby: [],
    });
  });

  test(`Reducer should load nearby offers`, () => {
    expect(reducer({
      offers: [],
      comments: [],
      offersNearby: [],
    }, {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: currentCityOffers,
    })).toEqual({
      offers: [],
      comments: [],
      offersNearby: currentCityOffers,
    });
  });

  test(`Reducer should load offers`, () => {
    expect(reducer({
      offers: [],
      comments: [],
      offersNearby: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: currentCityOffers,
    })).toEqual({
      offers: currentCityOffers,
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
      payload: comments,
    })).toEqual({
      offers: [],
      comments,
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
    const adaptedApiComments = Comment.parseComments(apiComments);
    const mockState = () => ({
      OFFER: {
        activeOffer: {
          id: hotelID
        },
      }
    });

    apiMock
      .onGet(`/comments/${hotelID}`)
      .reply(200, apiComments);

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
    const adaptedApiOffers = Offer.parseOffers(apiOffers);
    const mockState = () => ({
      OFFER: {
        activeOffer: {
          id: hotelID
        },
      }
    });

    apiMock
      .onGet(`/hotels/${hotelID}/nearby`)
      .reply(200, apiOffers);

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
    const adaptedApiOffers = Offer.parseOffers(apiOffers);

    apiMock
      .onGet(`/hotels`)
      .reply(200, apiOffers);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: adaptedApiOffers
        });
      });
  });
});
