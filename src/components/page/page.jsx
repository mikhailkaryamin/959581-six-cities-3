import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";

const Page = ({className, children}) => {
  return (
    <div className={`page ${className}`}>
      {<Header />}
      {children}
    </div>
  );
};

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Page.defaultProps = {
  className: ``
};

export default Page;
