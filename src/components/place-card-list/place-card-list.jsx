import React from "react";
import {
  connect
} from "react-redux";
import PropTypes from "prop-types";
import {
  offerPropTypes
} from "../../types.js";
import PlaceCard from "../place-card/place-card.jsx";

const PlacesCardList = (props) => {
  const {
    offers,
    modificatorClass
  } = props;

  const places = offers.map((offer) =>
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
};

PlacesCardList.propTypes = {
  offers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  modificatorClass: PropTypes.string,
};

PlacesCardList.defaultProps = {
  modificatorClass: ``
};

const mapStateToProps = (state) => ({
  offers: state.offers
});

export {
  PlacesCardList
};

export default connect(mapStateToProps)(PlacesCardList);

