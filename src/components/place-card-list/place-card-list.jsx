import React, {
  PureComponent
} from "react";
import PropTypes from "prop-types";
import {
  offerPropTypes
} from "../../types.js";
import {
  TypeSort
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
      offers,
      currentSort,
    } = this.props;

    switch (currentSort) {
      case TypeSort.PRICE_LOW_TO_HIGH:
        return offers.slice().sort((a, b) => a.price - b.price);
      case TypeSort.PRICE_HIGH_TO_LOW:
        return offers.slice().sort((a, b) => b.price - a.price);
      case TypeSort.TOP_RATED_FIRST:
        return offers.slice().sort((a, b) => b.rating - a.rating);
      default:
        return offers;
    }
  }

  render() {
    const {
      modificatorClass,
      handleHeaderOfferClick,
      onCardHover
    } = this.props;

    const places = this._sortBy().map((offer) =>
      <PlaceCardWrapped
        key={
          `${offer.id}`
        }
        offer={
          offer
        }
        handleHeaderOfferClick={
          handleHeaderOfferClick
        }
        onCardHover={
          onCardHover
        }
      />);

    return (
      <div className={`places__list ${modificatorClass}`}>
        {
          places
        }
      </div>
    );
  }
}

PlacesCardList.propTypes = {
  offers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  modificatorClass: PropTypes.string,
  currentSort: PropTypes.string.isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  handlePlaceCardMouseEnter: PropTypes.func.isRequired,
  handlePlaceCardMouseLeave: PropTypes.func.isRequired,
};

PlacesCardList.defaultProps = {
  modificatorClass: ``,
};

export default PlacesCardList;
