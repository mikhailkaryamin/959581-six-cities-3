import React,
{
  PureComponent
} from "react";
import Places from "../places/places.jsx";
import Map from "../map/map.jsx";
import PropTypes from "prop-types";
import {
  offerPropTypes
} from "../../types.js";
import {
  ModificatorClass
} from "../../consts.js";

class Cities extends PureComponent {
  constructor(props) {
    super(props);
  }

  _coordinates() {
    return (
      this.props.offers.map((offer) => offer.coordinate)
    );
  }

  render() {
    const {
      offers,
      handleHeaderOfferClick,
    } = this.props;

    return (
      <div className="cities">
        <div className="cities__places-container container">
          <Places
            offers={
              offers
            }
            handleHeaderOfferClick={
              handleHeaderOfferClick
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
                this._coordinates()
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
  handleHeaderOfferClick: PropTypes.func.isRequired,
};
export default Cities;

