import React from "react";
import Places from "../places/places.jsx";
import Map from "../map/map.jsx";
import PropTypes from "prop-types";
import {
  offerPropTypes,
} from "../../types.js";
import {
  ModificatorClass
} from "../../consts.js";

const Cities = ({offers, currentSort, handleHeaderOfferClick}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <Places
          modificatorClass={
            ModificatorClass.CITIES_PLACES
          }
          offers={offers}
          currentSort={currentSort}
          handleHeaderOfferClick={handleHeaderOfferClick}
        />
        <div className="cities__right-section">
          <Map
            modificatorClass={
              ModificatorClass.CITIES_MAP
            }
          />
        </div>
      </div>
    </div>
  );
};

Cities.propTypes = {
  offers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
};

export default Cities;
