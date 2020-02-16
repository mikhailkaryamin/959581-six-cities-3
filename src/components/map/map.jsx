import React from "react";
import PropTypes from "prop-types";

const Map = (props) => {
  const {
    modificatorClass
  } = props;

  return (
    <section className={`map ${modificatorClass}`} ></section>
  );
};

Map.propTypes = {
  modificatorClass: PropTypes.string
};

Map.defaultProps = {
  modificatorClass: ``
};

export default Map;
