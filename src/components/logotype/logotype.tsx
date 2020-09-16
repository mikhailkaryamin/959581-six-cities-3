import * as React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  AppRoute
} from '../../consts';

const Logotype = () => {
  return (
    <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
      <img className="header__logo" src={process.env.PUBLIC_URL + `/img/logo.svg`} alt="6 cities logo" width="81" height="41" />
    </Link>
  );
};

export default Logotype;
