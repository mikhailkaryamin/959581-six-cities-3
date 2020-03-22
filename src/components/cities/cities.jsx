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
  ClassModificator
} from "../../consts.js";

class Cities extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      currentCityOffers,
      currentSort,
      focusOffer,
      currentCity,
      handleHeaderOfferClick,
      onCardHover,
      onCardLeave,
      handleSortChange,
    } = this.props;

    return (
      <div className="cities">
        <div className="cities__places-container container">
          <Places
            currentCity={currentCity}
            classModificator={ClassModificator.CITIES_PLACES}
            currentCityOffers={currentCityOffers}
            currentSort={currentSort}
            onCardHover={onCardHover}
            onCardLeave={onCardLeave}
            handleSortChange={handleSortChange}
          />
          <div className="cities__right-section">
            <Map
              classModificator={ClassModificator.CITIES_MAP}
              currentCityOffers={currentCityOffers}
              focusOffer={focusOffer}
            />
          </div>
        </div>
      </div>
    );
  }
}

Cities.propTypes = {
  currentCityOffers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  focusOffer: offerPropTypes,
  currentSort: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default Cities;
