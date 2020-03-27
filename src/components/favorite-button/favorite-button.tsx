import * as React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  connect
} from 'react-redux';
import {
  Operation as FavoriteOperation
} from '../../reducer/favorite/favorite';
import {
  AuthorizationStatus
} from '../../reducer/user/user';
import {
  getAuthorizationStatus
} from '../../reducer/user/selectors';
import {
  checkFavorite
} from '../../reducer/favorite/selectors';
import {
  AppRoute
} from '../../consts';

interface Props {
  authStatus: string;
  classModificator?: string;
  id: number;
  height: number;
  width: number;
  isFavorite: boolean;
  onFavoriteClick: (id: number, isFavorite: boolean) => void;
}

class FavoriteButton extends React.PureComponent<Props, {}> {
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
