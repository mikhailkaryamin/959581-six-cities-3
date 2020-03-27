import * as React from 'react';
import {
  getUniqueArray
} from '../../utils';
import {
  Offer
} from '../../types';
import FavoriteItem from '../favorite-item/favorite-item';

interface Props {
  currentCity: string;
  favorites: Offer[];
  favoritesLocations: string[];
  onCardHover: () => void;
  onCardLeave: () => void;
}

class FavoritesList extends React.PureComponent<Props, {}> {
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

export default FavoritesList;
