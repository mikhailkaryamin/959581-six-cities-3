import React, {
  PureComponent
} from "react";
import {
  connect
} from "react-redux";
import {
  setActiveOffer
} from "../../actions.js";
import PropTypes from "prop-types";
import {
  ModificatorClass
} from "../../consts.js";
import Header from "../header/header.jsx";
import Reviews from "../reviews/reviews.jsx";
import Map from "../map/map.jsx";
import Places from "../places/places.jsx";
import {
  ONE_STAR
} from "../../consts.js";
import {
  offerPropTypes,
} from "../../types.js";


class Property extends PureComponent {
  constructor(props) {
    super(props);
  }

  _coordinatesWithoutActive(activeID) {
    return (
      this.props.offers
        .filter((offer) => offer.id !== activeID)
        .map((offer) => offer.coordinate)
    );
  }

  render() {
    const {
      activeOffer,
    } = this.props;

    const {
      id,
      src,
      price,
      rating,
      name,
      type,
      mark,
      insideItems,
      coordinate
    } = activeOffer;

    return (
      <div className="page">
        {<Header />}
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {src.map((img, i) =>
                  <div key={`${i}${img}`} className="property__image-wrapper">
                    <img className="property__image" src={img} alt="Photo studio" />
                  </div>
                )}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {mark ?
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
                    {name}
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
                    3 Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max 4 adults
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
                    {insideItems.map((item) =>
                      <li key={item} className="property__inside-item">
                        {item}
                      </li>)
                    }
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      Angelina
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                    </p>
                  </div>
                </div>
                {<Reviews />}
              </div>
            </div>
            {<Map
              modificatorClass={
                ModificatorClass.PROPERTY_MAP
              }
              coordinates={
                this._coordinatesWithoutActive(id)
              }
              activeCoordinates={
                coordinate
              }
            />}
          </section>
          <div className="container">
            {<Places
              modificatorClass={
                ModificatorClass.NEAR_PLACES
              }
            />}
          </div>
        </main>
      </div>
    );
  }
}

Property.propTypes = {
  offers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  activeOffer: offerPropTypes.isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activeOffer: state.activeOffer,
});

const mapDispatchToProps = (dispatch) => ({
  handleHeaderOfferClick(offer) {
    dispatch(setActiveOffer(offer));
  }
});

export {
  Property
};

export default connect(mapStateToProps, mapDispatchToProps)(Property);
