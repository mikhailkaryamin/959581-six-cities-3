import React, {
  PureComponent
} from 'react';
import {
  array,
  arrayOf,
  func,
  string,
} from 'prop-types';
import {
  getUniqueArray
} from '../../utils';
import FavoriteItem from '../favorite-item/favorite-item';

class FavoritesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  _getOffersForLocation(favoriteOffers, location) {
    return getUniqueArray(
        favoriteOffers
          .filter((favoriteOffer) => favoriteOffer.city.name === location)
    );
  }

  render() {
    const {
      currentCity,
      favorites,
      favoritesLocations,
      onCardHover,
      onCardLeave,
    } = this.props;

    return (
      <section className="favorites">
        <h1 className="favorites__title">
          Saved listing
        </h1>
        <ul className="favorites__list">
          {favoritesLocations.map((location, i) => (
            <FavoriteItem
              city={location}
              key={location}
              isCurrentCity={currentCity === location}
              offers={this._getOffersForLocation(favorites, favoritesLocations[i])}
              onCardHover={onCardHover}
              onCardLeave={onCardLeave}
            />
          ))}
        </ul>
      </section>
    );
  }
}

FavoritesList.propTypes = {
  currentCity: string.isRequired,
  favorites: array.isRequired,
  favoritesLocations: arrayOf(
      string
  ).isRequired,
  onCardHover: func.isRequired,
  onCardLeave: func.isRequired,
};

export default FavoritesList;
