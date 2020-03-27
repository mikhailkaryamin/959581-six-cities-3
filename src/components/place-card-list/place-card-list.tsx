import * as React from 'react';
import {
  Offer
} from "../../types";
import {
  TypeSort,
  ClassModificator,
} from "../../consts";
import PlaceCard from "../place-card/place-card";
import withHover from "../../hocs/with-hover/with-hover";

interface Props {
  currentCityOffers: Offer[];
  currentSort: string;
  classModificator: string;
  onCardHover: () => void;
  onCardLeave: () => void;
}

const PlaceCardWrapped = withHover(PlaceCard);

class PlacesCardList extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  _sortBy() {
    const {
      currentCityOffers,
      currentSort,
    } = this.props;

    switch (currentSort) {
      case TypeSort.PRICE_LOW_TO_HIGH:
        return currentCityOffers.slice().sort((a, b) => a.price - b.price);
      case TypeSort.PRICE_HIGH_TO_LOW:
        return currentCityOffers.slice().sort((a, b) => b.price - a.price);
      case TypeSort.TOP_RATED_FIRST:
        return currentCityOffers.slice().sort((a, b) => b.rating - a.rating);
      default:
        return currentCityOffers;
    }
  }

  render() {
    const {
      classModificator,
      onCardHover,
      onCardLeave,
    } = this.props;

    const places = this._sortBy().map((offer) =>
      <PlaceCardWrapped
        classModificator={ClassModificator.CITIES}
        key={`${offer.id}`}
        offer={offer}
        onCardHover={onCardHover}
        onCardLeave={onCardLeave}
      />);

    return (
      <div className={`places__list ${classModificator}`}>
        {
          places
        }
      </div>
    );
  }
}

export default PlacesCardList;
