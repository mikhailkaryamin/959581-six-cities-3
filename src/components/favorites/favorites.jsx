import React, {
  PureComponent
} from 'react';
import {
  array,
  arrayOf,
  func,
  string,
} from 'prop-types';
import {
  connect
} from 'react-redux';
import {
  userPropTypes
} from "../../types.js";
import {
  getFavorites,
  getFavoritesLocations,
} from '../../reducer/favorite/selectors';
import {
  getAuthorizationStatus,
  getUser,
} from '../../reducer/user/selectors.js';
import {
  AuthorizationStatus
} from '../../reducer/user/user.js';
import Page from '../page/page.jsx';
import FavoritesEmpty from '../favorites-empty/favorites-empty.jsx';
import FavoritesList from '../favorites-list/favorites-list.jsx';

class Favorites extends PureComponent {
  constructor(props) {
    super(props);
  }

  _setClassModificator() {
    const {
      favorites,
    } = this.props;

    const isEmpty = favorites.length === 0;

    if (isEmpty) {
      return `page page--favorites page--favorites-empty`;
    } else {
      return `page page--favorites`;
    }
  }

  render() {
    const {
      authStatus,
      currentCity,
      favorites,
      favoritesLocations,
      onCardHover,
      onCardLeave,
      user,
    } = this.props;

    const isEmpty = favorites.length === 0;
    const isAuth = authStatus === AuthorizationStatus.AUTH;

    return (
      <Page
        className={this._setClassModificator()}
        isAuth={isAuth}
        user={user}
      >
        <React.Fragment>
          <main className={`page__main page__main--favorites ${isEmpty ? `page__main--favorites-empty` : ``}`}>
            <div className="page__favorites-container container">
              {isEmpty &&
                <FavoritesEmpty />
              }
              {isEmpty ||
                <FavoritesList
                  currentCity={currentCity}
                  favorites={favorites}
                  favoritesLocations={favoritesLocations}
                  onCardHover={onCardHover}
                  onCardLeave={onCardLeave}
                />
              }
            </div>
          </main>
          <footer className="footer container">
            <a className="footer__logo-link" href="main.html">
              <img
                className="footer__logo"
                src="../img/logo.svg"
                alt="6 cities logo"
                width="64"
                height="33"
              />
            </a>
          </footer>
        </React.Fragment>
      </Page>
    );
  }
}

Favorites.propTypes = {
  authStatus: string.isRequired,
  currentCity: string.isRequired,
  favorites: array.isRequired,
  favoritesLocations: arrayOf(
      string
  ).isRequired,
  onCardHover: func.isRequired,
  onCardLeave: func.isRequired,
  user: userPropTypes,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
  favorites: getFavorites(state),
  favoritesLocations: getFavoritesLocations(state),
  user: getUser(state),
});

export {
  Favorites
};

export default connect(mapStateToProps)(Favorites);
