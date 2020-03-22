import React, {
  PureComponent
} from "react";
import {
  connect
} from 'react-redux';
import PropTypes from "prop-types";
import {
  ClassModificator
} from "../../consts.js";
import {
  getComments,
  getOffersNearby,
} from '../../reducer/data/selectors.js';
import {
  getActiveOffer,
} from '../../reducer/offer/selectors.js';
import {
  getAuthorizationStatus,
} from '../../reducer/user/selectors.js';
import {
  Operation as DataOperation
} from '../../reducer/data/data.js';
import {
  AuthorizationStatus
} from '../../reducer/user/user.js';
import {
  ONE_STAR,
} from "../../consts.js";
import {
  offerPropTypes,
  commentsPropTypes
} from "../../types.js";
import Reviews from "../reviews/reviews.jsx";
import Map from "../map/map.jsx";
import Places from "../places/places.jsx";

class Property extends PureComponent {
  componentDidMount() {
    this.props.onLoadDataProperty();
  }

  componentDidUpdate({offersNearby}) {
    if (!offersNearby) {
      this.props.onLoadDataProperty();
    }
  }

  render() {
    const {
      activeOffer,
      focusOffer,
      currentSort,
      comments,
      offersNearby,
      onCardHover,
      onCommentSubmit,
      onCardLeave,
      authStatus,
    } = this.props;

    if (offersNearby.length === 0 || activeOffer === null) {
      return ``;
    }

    const {
      images,
      isPremium,
      price,
      rating,
      title,
      type,
      bedrooms,
      maxAdults,
      goods,
      host,
    } = activeOffer;

    const isAuth = authStatus === AuthorizationStatus.AUTH;

    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((img, i) =>
                <div key={`${i}${img}`} className="property__image-wrapper">
                  <img className="property__image" src={img} alt="Photo studio" />
                </div>
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>
                    Premium
                  </span>
                </div>
                :
                ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ONE_STAR * rating}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;
                  {price}
                </b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item) =>
                    <li key={item} className="property__inside-item">
                      {item}
                    </li>)
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.is_pro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={`../${host.avatarUrl}`} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                  </p>
                </div>
              </div>
              {<Reviews
                isAuth={isAuth}
                onCommentSubmit={onCommentSubmit}
                comments={comments}
              />}
            </div>
          </div>
          {<Map
            classModificator={ClassModificator.PROPERTY_MAP}
            currentCityOffers={offersNearby}
            focusOffer={focusOffer}
          />}
        </section>
        <div className="container">
          {<Places
            classModificator={ClassModificator.NEAR_PLACES}
            currentCityOffers={offersNearby}
            currentSort={currentSort}
            onCardHover={onCardHover}
            onCardLeave={onCardLeave}
          />}
        </div>
      </main>
    );
  }
}

Property.propTypes = {
  offersCurrentCity: PropTypes.arrayOf(
      offerPropTypes
  ),
  activeOffer: offerPropTypes.isRequired,
  focusOffer: offerPropTypes,
  currentSort: PropTypes.string.isRequired,
  offersNearby: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  comments: PropTypes.arrayOf(
      commentsPropTypes
  ),
  authStatus: PropTypes.string.isRequired,
  onCommentSubmit: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
  onLoadDataProperty: PropTypes.func.isRequired,
};

Property.defaultProps = {
  reviews: [],
  currentSort: `Popular`
};

const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state),
  comments: getComments(state),
  offersNearby: getOffersNearby(state),
  authStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCommentSubmit(comment) {
    dispatch(DataOperation.uploadComments(comment));
  },
  onLoadDataProperty() {
    dispatch(DataOperation.loadComments());
    dispatch(DataOperation.loadOffersNearby());
  },
});

export {
  Property
};

export default connect(mapStateToProps, mapDispatchToProps)(Property);
