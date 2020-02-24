import React from "react";
import PropTypes from "prop-types";

const Locations = ({locations}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((location) =>
          <li className="locations__item" key={location} >
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
};

export default Locations;
