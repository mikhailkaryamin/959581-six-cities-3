import NameSpace from '../name-space.js';
import {
  createSelector
} from 'reselect';
import {
  getUniqueArray
} from '../../utils.js';

const getFavorites = (state) => state[NameSpace.FAVORITE].favorites;

const getFavoritesLocations = createSelector(
    getFavorites,
    (favorites) => getUniqueArray(favorites
      .map((favorite) => favorite.city.name)
    )
);

export {
  getFavorites,
  getFavoritesLocations,
};
