import React, {
  PureComponent
} from "react";
import {
  connect
} from 'react-redux';
import PropTypes from "prop-types";
import {
  ModificatorClass
} from "../../consts.js";
import {
  getComments,
  getOffersNearby,
} from '../../reducer/data/selectors.js';
import {
  Operation as DataOperation
} from '../../reducer/data/data.js';
import {
  ONE_STAR
} from "../../consts.js";
import {
  offerPropTypes,
  commentsPropTypes
} from "../../types.js";
import Reviews from "../reviews/reviews.jsx";
import Map from "../map/map.jsx";
import Places from "../places/places.jsx";

class Property extends PureComponent {
  render() {
    const {
      activeOffer,
      focusOffer,
      currentSort,
      comments,
      offersNearby,
      handleHeaderOfferClick,
      onCardHover,
      onCommentSubmit,
    } = this.props;

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

    if (offersNearby.length === 0) {
      return ``;
    }

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
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
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
                onCommentSubmit={onCommentSubmit}
                comments={comments}
              />}
            </div>
          </div>
          {<Map
            modificatorClass={ModificatorClass.PROPERTY_MAP}
            currentCityOffers={offersNearby}
            focusOffer={focusOffer}
          />}
        </section>
        <div className="container">
          {<Places
            modificatorClass={ModificatorClass.NEAR_PLACES}
            currentCityOffers={offersNearby}
            currentSort={currentSort}
            handleHeaderOfferClick={handleHeaderOfferClick}
            onCardHover={onCardHover}
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
  handleHeaderOfferClick: PropTypes.func.isRequired,
  onCommentSubmit: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

Property.defaultProps = {
  reviews: [],
  currentSort: `Popular`
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
  offersNearby: getOffersNearby(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCommentSubmit(comment) {
    dispatch(DataOperation.uploadComments(comment));
  },
});

export {
  Property
};

export default connect(mapStateToProps, mapDispatchToProps)(Property);
