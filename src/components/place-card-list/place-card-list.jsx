import React, {
  PureComponent
} from "react";
import PropTypes from "prop-types";
import {
  offerPropTypes
} from "../../types.js";
import {
  TypeSort,
  ClassModificator,
} from "../../consts.js";
import PlaceCard from "../place-card/place-card.jsx";
import withHover from "../../hocs/with-hover/with-hover.js";

const PlaceCardWrapped = withHover(PlaceCard);

class PlacesCardList extends PureComponent {
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
      handleHeaderOfferClick,
      onCardHover,
      handleActiveItem
    } = this.props;

    const places = this._sortBy().map((offer) =>
      <PlaceCardWrapped
        key={`${offer.id}`}
        offer={offer}
        handleHeaderOfferClick={handleHeaderOfferClick}
        onCardHover={onCardHover}
        handleActiveItem={handleActiveItem}
        classModificator={ClassModificator.CITIES}
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

PlacesCardList.propTypes = {
  currentCityOffers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  classModificator: PropTypes.string,
  currentSort: PropTypes.string.isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  handleActiveItem: PropTypes.func.isRequired,
};

PlacesCardList.defaultProps = {
  classModificator: ``,
};

export default PlacesCardList;
