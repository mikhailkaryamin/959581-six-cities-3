import * as React from 'react';
import {
  Offer
} from '../../types';
import {
  ClassModificator
} from '../../consts';
import PlaceCard from '../place-card/place-card';
import withHover from '../../hocs/with-hover/with-hover';

interface Props {
  city: string;
  offers: Offer[];
  isCurrentCity: boolean;
  onCardHover: () => void;
  onCardLeave: () => void;
}

const PlaceCardWrapped = withHover(PlaceCard);

const FavoriteItem: React.FC<Props> = (props: Props) => {
  const {
    city,
    offers,
    isCurrentCity,
    onCardHover,
    onCardLeave,
  } = props;

  return (
    <li className="favorites__locations-items">
      <div className={`favorites__locations locations ${isCurrentCity ? `locations--current` : ``}`}>
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>
              {city}
            </span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCardWrapped
            key={offer.id}
            classModificator={ClassModificator.FAVORITES}
            offer={offer}
            onCardHover={onCardHover}
            onCardLeave={onCardLeave}
          />
        ))}
      </div>
    </li>
  );
};

// FavoriteItem.propTypes = {
//   city: string.isRequired,
//   isCurrentCity: bool.isRequired,
//   offers: arrayOf(offerPropTypes)
//       .isRequired,
//   onCardHover: func.isRequired,
//   onCardLeave: func.isRequired,
// };

export default FavoriteItem;
