import React from "react";
import {
  connect
} from "react-redux";
import Places from "../places/places.jsx";
import Map from "../map/map.jsx";
import PropTypes from "prop-types";
import {
  offerPropTypes
} from "../../types.js";
import {
  ModificatorClass
} from "../../consts.js";

const Cities = ({offers, coordinates}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <Places
          offers={
            offers
          }
          modificatorClass={
            ModificatorClass.CITIES_PLACES
          }
        />
        <div className="cities__right-section">
          <Map
            modificatorClass={
              ModificatorClass.CITIES_MAP
            }
            coordinates={
              coordinates
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
  coordinates: PropTypes.arrayOf(
      PropTypes.arrayOf(
          PropTypes.number.isRequired
      )
  )
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  coordinates: state.coordinates,
});

export {
  Cities
};

export default connect(mapStateToProps)(Cities);

