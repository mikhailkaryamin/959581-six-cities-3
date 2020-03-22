import NameSpace from '../name-space.js';
import {
  createSelector
} from 'reselect';
import {
  getUniqueArray
} from '../../utils.js';

const getFavorites = (state) => state[NameSpace.FAVORITE].favorites;

const checkFavorite = (state, id) => {
  return state[NameSpace.FAVORITE]
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
