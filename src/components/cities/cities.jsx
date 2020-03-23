import React, {
  PureComponent
} from "react";
import {
  arrayOf,
  string,
  func,
} from "prop-types";
import {
  offerPropTypes,
} from "../../types.js";
import {
  ClassModificator
} from "../../consts.js";
import Map from "../map/map.jsx";
import Places from "../places/places.jsx";

class Cities extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      currentCityOffers,
      currentSort,
      currentCity,
      focusOffer,
      handleSortChange,
      onCardHover,
      onCardLeave,
    } = this.props;

    return (
      <div className="cities">
        <div className="cities__places-container container">
          <Places
            classModificator={ClassModificator.CITIES_PLACES}
            currentCity={currentCity}
            currentCityOffers={currentCityOffers}
            currentSort={currentSort}
            handleSortChange={handleSortChange}
            onCardHover={onCardHover}
            onCardLeave={onCardLeave}
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
  currentCityOffers: arrayOf(
      offerPropTypes
  ).isRequired,
  currentSort: string.isRequired,
  currentCity: string.isRequired,
  handleSortChange: func.isRequired,
  focusOffer: offerPropTypes,
  onCardHover: func.isRequired,
  onCardLeave: func.isRequired,
};

export default Cities;
