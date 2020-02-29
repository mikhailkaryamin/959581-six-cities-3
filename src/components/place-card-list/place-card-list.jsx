import React, {
  PureComponent
} from "react";
import {
  connect
} from "react-redux";
import PropTypes from "prop-types";
import {
  offerPropTypes
} from "../../types.js";
import {
  TypeSort
} from "../../consts.js";
import PlaceCard from "../place-card/place-card.jsx";

class PlacesCardList extends PureComponent {
  constructor(props) {
    super(props);
  }

  _sortBy() {
    const {
      offers,
      currentSort
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
    } = this.props;

    const places = this._sortBy().map((offer) =>
      <PlaceCard
        key={`${offer.id}`}
        offer={offer}
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
};

PlacesCardList.defaultProps = {
  modificatorClass: ``
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  currentSort: state.currentSort,
});

export {
  PlacesCardList
};

export default connect(mapStateToProps)(PlacesCardList);

