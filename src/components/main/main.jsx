import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {
  const {
    isEmpty,
    children
  } = props;

  return (
    <main className={`page__main page__main--index ${isEmpty ? `page__main--index-empty` : ``}`}>
      <h1 className="visually-hidden">Cities</h1>
      {children}
    </main>
  );
};

Main.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  children: PropTypes.element,
};
export default Main;
