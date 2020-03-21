import React from "react";
import PropTypes from "prop-types";
import {
  userPropTypes
} from '../../types.js';
import Header from "../header/header.jsx";

const Page = (props) => {
  const {
    className,
    isAuth,
    user,
    children
  } = props;

  return (
    <div className={`page ${className}`}>
      {<Header
        isAuth={isAuth}
        user={user}
      />}
      {children}
    </div>
  );
};

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  isAuth: PropTypes.bool.isRequired,
  user: userPropTypes,
};

Page.defaultProps = {
  className: ``,
};

export default Page;
