import React from "react";
import {
  bool,
} from 'prop-types';
import {
  Link
} from 'react-router-dom';
import {
  AppRoute,
  SITE_URL
} from '../../consts';
import {
  userPropTypes
} from '../../types';
import Logotype from "../logotype/logotype";

const Header = (props) => {
  const {
    isAuth,
    user,
  } = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logotype />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isAuth &&
                  <Link className="header__nav-link header__nav-link--profile"
                    to={AppRoute.FAVORITE}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"
                      style={{backgroundImage: `url(${SITE_URL}${user.avatarUrl})`}}
                    />
                    <span className="header__user-name user__name">{user.email}</span>
                  </Link>
                }
                {isAuth ||
                  <Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"/>
                    <span className="header__user-name user__name">Sign in</span>
                  </Link>
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuth: bool.isRequired,
  user: userPropTypes,
};

export default Header;
