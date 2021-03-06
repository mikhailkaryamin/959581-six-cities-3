const API_OFFERS = [{
  'bedrooms': 3,
  'city': `Paris`,
  'description': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  'goods': [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  'host': {
    'avatar_url': `avatar`,
    'id': 1,
    'is_pro': true,
    'name': `GG`
  },
  'id': 1,
  'images': `img/1.png`,
  'is_favorite': true,
  'is_premium': true,
  'location': {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  'max_adults': 3,
  'preview_image': `img/1.png`,
  'price': 600,
  'rating': 3,
  'title': `Beautiful & luxurious studio at great location`,
  'type': `apartment`
}];

const API_COMMENTS = [{
  'id': 1,
  'rating': 3.5,
  'user': {
    'avatar_url': `userAvatar`,
    'id': 1,
    'is_pro': true,
    'name': `GG`
  },
  'comment': `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Curabitur ornare nunc a blandit ultricies.
  Integer a urna in nunc congue efficitur.`,
  'date': `April 2011`
}];

const USER = {
  avatarUrl: `/avatar`,
  id: 1,
  isPro: true,
  name: `Vasya`,
  email: `safsa@mail.ru`,
};

const OFFERS = [
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

const ONE_OFFER = {
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

const LOCATIONS = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const COMMENTS = [
  {
    id: 1,
    user: {
      id: 1,
      isPro: true,
      name: `Mi`,
      avatarUrl: `img/avatar-max.jpg`
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
      avatarUrl: `img/avatar-max.jpg`
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
      avatarUrl: `img/avatar-max.jpg`
    },
    rating: 2,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Curabitur ornare nunc a blandit ultricies.
    Integer a urna in nunc congue efficitur.`,
    date: `April 2010`
  },
];

const ONE_COMMENT = {
  id: 1,
  user: {
    id: 1,
    isPro: true,
    name: `Mi`,
    avatarUrl: `img/avatar-max.jpg`
  },
  rating: 2,
  comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Curabitur ornare nunc a blandit ultricies.
  Integer a urna in nunc congue efficitur.`,
  date: `April 2010`
};

const CURRENT_SORT = `Popular`;

const CURRENT_CITY = `Amsterdam`;

export {
  API_OFFERS,
  API_COMMENTS,
  OFFERS,
  ONE_OFFER,
  CURRENT_SORT,
  CURRENT_CITY,
  LOCATIONS,
  COMMENTS,
  ONE_COMMENT,
  USER,
};
