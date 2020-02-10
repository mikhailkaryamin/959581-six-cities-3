import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Locations from "../locations/locations.jsx";
import Cities from "../cities/cities.jsx";

const Main = (props) => {

  const {available, descriptions, onHeadlineButtonClick} = props;

  return (
    <div className="page page--gray page--main">

      {<Header />}

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">

          {<Locations />}

        </div>

        {<Cities
          available={available}
          descriptions={descriptions}
          onHeadlineButtonClick={onHeadlineButtonClick}
        />}

      </main>
    </div>
  );
};

Main.propTypes = {
  available: PropTypes.number.isRequired,
  descriptions: PropTypes.arrayOf(
      PropTypes.string)
  .isRequired,
  onHeadlineButtonClick: PropTypes.func.isRequired,
};

export default Main;

