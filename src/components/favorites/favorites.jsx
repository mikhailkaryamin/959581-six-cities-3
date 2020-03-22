import React, {
  PureComponent
} from 'react';
import PropTypes from 'prop-types';
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
      favorites,
      favoritesLocations,
      currentCity,
      authStatus,
      user,
      onCardHover,
      onCardLeave,
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
                  onCardHover={onCardHover}
                  onCardLeave={onCardLeave}
                  favorites={favorites}
                  favoritesLocations={favoritesLocations}
                  currentCity={currentCity}
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
  user: userPropTypes,
  authStatus: PropTypes.string.isRequired,
  favorites: PropTypes.array.isRequired,
  favoritesLocations: PropTypes
    .arrayOf(
        PropTypes.string
    ).isRequired,
  currentCity: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
  favoritesLocations: getFavoritesLocations(state),
  authStatus: getAuthorizationStatus(state),
  user: getUser(state),
});

export {
  Favorites
};
export default connect(mapStateToProps)(Favorites);
