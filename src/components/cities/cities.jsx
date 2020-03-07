import React, {
  PureComponent
} from "react";
import Places from "../places/places.jsx";
import Map from "../map/map.jsx";
import PropTypes from "prop-types";
import {
  offerPropTypes,
} from "../../types.js";
import {
  ModificatorClass
} from "../../consts.js";

class Cities extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      offers,
      currentSort,
      handleHeaderOfferClick,
      onCardHover,
      focusOffer
    } = this.props;

    return (
      <div className="cities">
        <div className="cities__places-container container">
          <Places
            modificatorClass={ModificatorClass.CITIES_PLACES}
            offers={offers}
            currentSort={currentSort}
            handleHeaderOfferClick={handleHeaderOfferClick}
            onCardHover={onCardHover}
          />
          <div className="cities__right-section">
            <Map
              modificatorClass={
                ModificatorClass.CITIES_MAP
              }
              offers={
                offers
              }
              focusOffer={
                focusOffer
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

Cities.propTypes = {
  offers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  focusOffer: offerPropTypes,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default Cities;
