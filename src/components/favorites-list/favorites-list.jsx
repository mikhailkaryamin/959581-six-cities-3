import React, {
  PureComponent
} from 'react';
import PropTypes from 'prop-types';
import FavoriteItem from '../favorite-item/favorite-item.jsx';
import {
  getUniqueArray
} from '../../utils.js';

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
      favorites,
      favoritesLocations,
      currentCity,
      onCardHover,
      onCardLeave,
    } = this.props;

    return (
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {favoritesLocations.map((location, i) => (
            <FavoriteItem
              onCardHover={onCardHover}
              onCardLeave={onCardLeave}
              key={location}
              city={location}
              offers={this._getOffersForLocation(favorites, favoritesLocations[i])}
              isCurrentCity={currentCity === location}
            />
          ))}
        </ul>
      </section>
    );
  }
}

FavoritesList.propTypes = {
  favorites: PropTypes.array.isRequired,
  favoritesLocations: PropTypes
    .arrayOf(
        PropTypes.string
    ).isRequired,
  currentCity: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
};

export default FavoritesList;
