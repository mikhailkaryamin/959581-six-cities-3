import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";

const Page = (props) => {
  const {
    className,
    children
  } = props;

  return (
    <div className={`page ${className}`}>
      {<Header />}
      {children}
    </div>
  );
};

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

Page.defaultProps = {
  className: ``,
};

export default Page;
