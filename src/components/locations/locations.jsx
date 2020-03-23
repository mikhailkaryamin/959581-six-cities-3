import React from "react";
import {
  arrayOf,
  func,
  string,
} from "prop-types";

const Locations = (props) => {
  const {
    currentCity,
    locations,
    handleLocationClick,
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
  currentCity: string.isRequired,
  locations: arrayOf(
      string.isRequired
  ).isRequired,
  handleLocationClick: func.isRequired,
};

export default Locations;
