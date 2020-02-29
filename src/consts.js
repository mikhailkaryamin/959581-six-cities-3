const MS_IN_WEEK = 604800000;

const ModificatorClass = {
  CITIES_MAP: `cities__map`,
  CITIES_PLACES: `cities__places`,
  CITIES_PLACES_LIST: `cities__places-list tabs__content`,
  PROPERTY_MAP: `property__map`,
  NEAR_PLACES: `near-places`,
  NEAR_PLACES_LIST: `near-places__list`,
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

const ONE_STAR = 20;
const STARS = [1, 2, 3, 4, 5];

export {
  MS_IN_WEEK,
  ModificatorClass,
  SORTING,
  ONE_STAR,
  STARS,
  TypeSort
};
