import NameSpace from '../name-space.js';
import {
  createSelector
} from 'reselect';
import {
  getUniqueArray
} from '../../utils.js';

const NAME_SPACE = NameSpace.FAVORITE;

const getFavorites = (state) => state[NAME_SPACE].favorites;

const checkFavorite = (state, id) => {
  return state[NAME_SPACE]
    .favorites
    .some((offer) => offer.id === id);
};

const getFavoritesLocations = createSelector(
    getFavorites,
    (favorites) => getUniqueArray(favorites
      .map((favorite) => favorite.city.name)
    )
);

export {
  checkFavorite,
  getFavorites,
  getFavoritesLocations,
};
