import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {countPlaces} = props;
  const {listOffers} = props;

  return (
    <Main
      countPlaces = {countPlaces}
      listOffers = {listOffers}
    />
  );
};

App.propTypes = {
  countPlaces: PropTypes.number.isRequired,
  listOffers: PropTypes.arrayOf(PropTypes.string.isRequired),
};


export default App;
