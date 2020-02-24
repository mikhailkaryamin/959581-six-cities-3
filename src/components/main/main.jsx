import React from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";
import Header from "../header/header.jsx";
import Locations from "../locations/locations.jsx";
import Cities from "../cities/cities.jsx";

const Main = ({locations}) => {

  return (
    <div className="page page--gray page--main">
      {<Header />}
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          {<Locations
            locations={
              locations
            }
          />}
        </div>
        {<Cities />}
      </main>
    </div>
  );
};

Main.propTypes = {
  locations: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  locations: state.locations,
});

export {
  Main
};

export default connect(mapStateToProps)(Main);
