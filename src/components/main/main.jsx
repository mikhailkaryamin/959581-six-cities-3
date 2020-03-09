import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {
  const {
    children
  } = props;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.element,
};
export default Main;
