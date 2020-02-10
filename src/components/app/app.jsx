import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const headlineButtonHandler = () => {};

const App = (props) => {
  const {available} = props;
  const {descriptions} = props;

  return (
    <Main
      available = {available}
      descriptions = {descriptions}
      onHeadlineButtonClick={headlineButtonHandler}
    />
  );
};

App.propTypes = {
  available: PropTypes.number.isRequired,
  descriptions: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
};


export default App;
