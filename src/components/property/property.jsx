import React, {
  PureComponent
} from "react";
import PropTypes from "prop-types";
import {
  ModificatorClass
} from "../../consts.js";
import Reviews from "../reviews/reviews.jsx";
import Map from "../map/map.jsx";
import Places from "../places/places.jsx";
import {
  ONE_STAR
} from "../../consts.js";
import {
  offerPropTypes,
  reviewsPropTypes,
} from "../../types.js";


class Property extends PureComponent {
  render() {
    const {
      activeOffer,
      offersCurrentCity,
      focusOffer,
      currentSort,
      handleHeaderOfferClick,
      onCardHover,
      comments
    } = this.props;
    const {
      images,
      is_premium,
      price,
      rating,
      title,
      type,
      bedrooms,
      max_adults,
      goods,
      host,
    } = activeOffer;

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
              {is_premium ?
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
                  Max {max_adults} adults
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
                    <img className="property__avatar user__avatar" src={host.avatar_url} width="74" height="74" alt="Host avatar" />
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
                comments={comments}
              />}
            </div>
          </div>
          {/* {<Map
            modificatorClass={ModificatorClass.PROPERTY_MAP}
            offersCurrentCity={offersCurrentCity}
            focusOffer={focusOffer}
          />} */}
        </section>
        <div className="container">
          {/* {<Places
            modificatorClass={ModificatorClass.NEAR_PLACES}
            offersCurrentCity={offersCurrentCity}
            currentSort={currentSort}
            handleHeaderOfferClick={handleHeaderOfferClick}
            onCardHover={onCardHover}
          />} */}
        </div>
      </main>
    );
  }
}

Property.propTypes = {
  offersCurrentCity: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  reviews: PropTypes.arrayOf(
      reviewsPropTypes
  ),
  activeOffer: offerPropTypes.isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  focusOffer: offerPropTypes,
  onCardHover: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
};

Property.defaultProps = {
  reviews: [],
  currentSort: `Popular`
};

export default Property;
