import React from 'react';
import PropTypes from 'prop-types';
import {
  offerPropTypes
} from '../../types.js';
import {
  ClassModificator
} from '../../consts.js';
import PlaceCard from '../place-card/place-card.jsx';
import withHover from '../../hocs/with-hover/with-hover.js';

const PlaceCardWrapped = withHover(PlaceCard);

const FavoriteItem = (props) => {
  const {
    city,
    offers,
    isCurrentCity
  } = props;

  return (
    <li className="favorites__locations-items">
      <div className={`favorites__locations locations ${isCurrentCity ? `locations--current` : ``}`}>
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCardWrapped
            key={offer.id}
            classModificator={ClassModificator.FAVORITES}
            offer={offer}
          />
        ))}
      </div>
    </li>
  );
};

FavoriteItem.propTypes = {
  isCurrentCity: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  offers: PropTypes
      .arrayOf(offerPropTypes)
      .isRequired
};

export default FavoriteItem;
