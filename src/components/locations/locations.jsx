import React from "react";
import PropTypes from "prop-types";
import {
  ActionCreator
} from "../../reducer";
import {
  connect
} from "react-redux";

const Locations = (props) => {
  const {
    locations,
    handleLocationClick
  } = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((location) =>
          <li
            className="locations__item"
            key={
              location
            }
            onClick={() => {
              handleLocationClick(location);
            }}
          >
            <a className="locations__item-link tabs__item" href="#">
              <span>
                {location}
              </span>
            </a>
          </li>
        )}
      </ul>
    </section>
  );
};

Locations.propTypes = {
  locations: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  handleLocationClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  locations: state.locations
});

const mapDispatchToProps = (dispatch) => ({
  handleLocationClick(location) {
    dispatch(ActionCreator.setCurrentCity(location));
    dispatch(ActionCreator.getOffersList(location));
    dispatch(ActionCreator.getAvailableOffers());
  },
});

export {
  Locations
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
