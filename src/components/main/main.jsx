import React from "react";
import PropTypes from "prop-types";

const Main = ({children}) => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Main;

