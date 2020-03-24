import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {
  mount
} from "enzyme";
import {
  Property
} from "./property.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import {
  BrowserRouter
} from 'react-router-dom';
import {
  storeWithAuth
} from "../../mocks/initialState.js";
import {
  AuthorizationStatus
} from '../../reducer/user/user.js';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

const offersNearby = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 2,
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 3,
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 4,
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  }
];
const focusOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    avatarUrl: `img/1.png`,
    id: 3,
    isPro: true,
    name: `Angelina`
  },
  id: 1,
  images: [`img/1.png`, `img/2.png`],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: `img/1.png`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
};
const activeOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    avatarUrl: `img/1.png`,
    id: 3,
    isPro: true,
    name: `Angelina`
  },
  id: 1,
  images: [`img/1.png`, `img/2.png`],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: `img/1.png`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
};
const comments = [
  {
    id: 1,
    user: {
      id: 1,
      isPro: true,
      name: `Mi`,
      avatarURL: `img/avatar-max.jpg`
    },
    rating: 2,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Curabitur ornare nunc a blandit ultricies.
    Integer a urna in nunc congue efficitur.`,
    date: `April 2010`
  },
  {
    id: 2,
    user: {
      id: 1,
      isPro: true,
      name: `Mi`,
      avatarURL: `img/avatar-max.jpg`
    },
    rating: 2,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Curabitur ornare nunc a blandit ultricies.
    Integer a urna in nunc congue efficitur.`,
    date: `April 2010`
  },
  {
    id: 3,
    user: {
      id: 1,
      isPro: true,
      name: `Mi`,
      avatarURL: `img/avatar-max.jpg`
    },
    rating: 2,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Curabitur ornare nunc a blandit ultricies.
    Integer a urna in nunc congue efficitur.`,
    date: `April 2010`
  },
];
const currentSort = `Popular`;
const onCardHover = () => {};
const onCardLeave = () => {};
const onResetError = () => {};
const onLoadDataProperty = () => {};
const onCommentSubmit = () => {};
const responseStatus = 200;
const countComments = 3;
const authStatus = AuthorizationStatus.AUTH;

it(`Render property correctly`, () => {
  const store = mockStore(storeWithAuth);
  const tree = mount(
      <Provider
        store={store}
      >
        <BrowserRouter>
          <Property
            currentSort={currentSort}
            countComments={countComments}
            focusOffer={focusOffer}
            onCardHover={onCardHover}
            onCardLeave={onCardLeave}
            onResetError={onResetError}
            responseStatus={responseStatus}
            offersNearby={offersNearby}
            activeOffer={activeOffer}
            comments={comments}
            onLoadDataProperty={onLoadDataProperty}
            authStatus={authStatus}
            onCommentSubmit={onCommentSubmit}
          />
        </BrowserRouter>
      </Provider>
  ).html();

  expect(tree).toMatchSnapshot();
});
