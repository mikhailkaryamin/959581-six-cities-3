import React from "react";
import {
  bool,
  element,
  string,
} from "prop-types";
import {
  userPropTypes
} from '../../types.js';
import Header from "../header/header.jsx";

const Page = (props) => {
  const {
    className,
    children,
    isAuth,
    user,
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
  className: string,
  children: element,
  isAuth: bool.isRequired,
  user: userPropTypes,
};

Page.defaultProps = {
  className: ``,
};

export default Page;
