import React from "react";
import PropTypes from "prop-types";

const Locations = (props) => {
  const {
    locations,
    handleLocationClick,
    currentCity,
  } = props;
  return (
    <div className="tabs">
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
              <a className={
                `locations__item-link tabs__item ${location === currentCity ? `tabs__item--active` : ``}`
              }
              href="#"
              >
                <span>
                  {location}
                </span>
              </a>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

Locations.propTypes = {
  locations: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  handleLocationClick: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default Locations;
