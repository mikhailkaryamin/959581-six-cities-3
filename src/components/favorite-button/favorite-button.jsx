import React, {
  PureComponent
} from 'react';
import {
  Link
} from 'react-router-dom';
import {
  connect
} from 'react-redux';
import {
  bool,
  func,
  number,
  string,
} from 'prop-types';
import {
  Operation as FavoriteOperation
} from '../../reducer/favorite/favorite.js';
import {
  AuthorizationStatus
} from '../../reducer/user/user.js';
import {
  getAuthorizationStatus
} from '../../reducer/user/selectors.js';
import {
  checkFavorite
} from '../../reducer/favorite/selectors.js';
import {
  AppRoute
} from '../../consts.js';

class FavoriteButton extends PureComponent {
  constructor(props) {
    super(props);
    this._handleFavorite = this._handleFavorite.bind(this);
  }

  _handleFavorite() {
    const {
      id,
      isFavorite,
      onFavoriteClick
    } = this.props;

    onFavoriteClick(id, isFavorite);
  }

  render() {
    const {
      authStatus,
      classModificator,
      isFavorite,
      height,
      width,
    } = this.props;

    const isAuth = authStatus === AuthorizationStatus.AUTH;
    const favoriteClass = isFavorite ? `place-card__bookmark-button--active` : ``;

    return (
      <React.Fragment>
        {isAuth &&
          <button
            className={`${classModificator}__bookmark-button button ${favoriteClass}`}
            type="button"
            onClick={this._handleFavorite}
          >
            <svg className={`place-card__bookmark-icon`}
              width={width}
              height={height}
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        }
        {isAuth ||
          <Link to={AppRoute.LOGIN} className={`${classModificator}__bookmark-button button`}>
            <svg className={`place-card__bookmark-icon`}
              width={width}
              height={height}
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </Link>
        }
      </React.Fragment>
    );
  }
}

FavoriteButton.propTypes = {
  authStatus: string.isRequired,
  classModificator: string.isRequired,
  id: number.isRequired,
  isFavorite: bool.isRequired,
  height: number.isRequired,
  onFavoriteClick: func.isRequired,
  width: number.isRequired,
};

const mapStateToProps = (state, props) => ({
  authStatus: getAuthorizationStatus(state),
  isFavorite: checkFavorite(state, props.id),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(id, isFavorite) {
    if (isFavorite) {
      dispatch(FavoriteOperation.removeFavorite(id));
    } else {
      dispatch(FavoriteOperation.addFavorite(id));
    }
  }
});

export {
  FavoriteButton
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
