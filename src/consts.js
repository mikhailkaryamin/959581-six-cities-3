const AppRoute = {
  ROOT: `/`,
  OFFER: `/offer/:id`,
  LOGIN: `/login`,
  FAVORITE: `/favorite/`,
  NOT_FOUND: `/*`,
};

const ClassModificator = {
  CITIES: `cities`,
  CITIES_MAP: `cities__map`,
  CITIES_PLACES: `cities__places`,
  CITIES_PLACES_LIST: `cities__places-list tabs__content`,
  PROPERTY_MAP: `property__map`,
  PROPERTY: `property`,
  PLACE_CARD: `place-card`,
  NEAR_PLACES: `near-places`,
  NEAR_PLACES_LIST: `near-places__list`,
  FAVORITES: `favorites`,
  PAGE_MAIN: `page--gray page--main`,
  PAGE_LOGIN: `page--gray page--login`,
  PAGE_PROPERTY: `page__main--property`,
};

const SORTING = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

const TypeSort = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

const TypeInputLogin = {
  EMAIL: `email`,
  PASSWORD: `password`,
};

const ResponseStatus = {
  STATUS_OK: 200,
  UNAUTHORIZED: 401,
};

const MS_IN_WEEK = 604800000;
const ONE_STAR = 20;
const STARS = [5, 4, 3, 2, 1];
const SITE_URL = `https://htmlacademy-react-3.appspot.com/six-cities`;
const MAX_SHOW_COMMENTS = 10;

export {
  MS_IN_WEEK,
  SORTING,
  ONE_STAR,
  STARS,
  SITE_URL,
  ResponseStatus,
  AppRoute,
  TypeSort,
  ClassModificator,
  TypeInputLogin,
  MAX_SHOW_COMMENTS,
};
