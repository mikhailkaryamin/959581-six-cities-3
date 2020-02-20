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
    const MODIFICATOR_CLASS_MAP = `cities__map`;

    const {
      offers,
      handleHeaderOfferClick
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
          />
          <div className="cities__right-section">
            <Map
              modificatorClass={
                MODIFICATOR_CLASS_MAP
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

