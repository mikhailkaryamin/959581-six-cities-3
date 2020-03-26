import * as React from 'react';
import {
  connect
} from 'react-redux';
import {
  ClassModificator,
} from "../../consts";
import {
  getCommentsByShow,
  getOffersNearby,
  getCountComments,
} from '../../reducer/data/selectors';
import {
  getActiveOffer,
} from '../../reducer/offer/selectors';
import {
  getAuthorizationStatus,
} from '../../reducer/user/selectors';
import {
  Operation as DataOperation
} from '../../reducer/data/data';
import {
  AuthorizationStatus
} from '../../reducer/user/user';
import {
  Offer,
  Comment,
} from "../../types";
import Reviews from "../reviews/reviews";
import Map from "../map/map";
import Places from "../places/places";
import FavoriteButton from "../favorite-button/favorite-button";
import Rating from '../rating/rating';

interface Props {
  activeOffer: Offer;
  authStatus: string;
  currentSort: string;
  comments: Comment[];
  countComments: number;
  focusOffer: Offer;
  offersNearby: Offer[];
  onCardHover: () => void;
  onCardLeave: () => void;
  onCommentSubmit: () => void;
  onLoadDataProperty: () => void;
  responseStatus: null | number;
}

class Property extends React.PureComponent<Props, {}> {
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
      authStatus,
      currentSort,
      comments,
      countComments,
      focusOffer,
      offersNearby,
      onCardHover,
      onCommentSubmit,
      onCardLeave,
      responseStatus,
    } = this.props;

    const isLoading = offersNearby.length === 0 || activeOffer === null;

    if (isLoading) {
      return ``;
    }

    const {
      bedrooms,
      goods,
      host,
      id,
      images,
      isPremium,
      maxAdults,
      price,
      rating,
      title,
      type,
      location,
    } = activeOffer;

    const CURRENT_OFFER_COORDINATE = {
      lat: location.latitude,
      lng: location.longitude,
    };

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
              {isPremium &&
                <div className="property__mark">
                  <span>
                    Premium
                  </span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <FavoriteButton
                  classModificator={ClassModificator.PROPERTY}
                  id={id}
                  height={33}
                  width={31}
                />
              </div>
              <Rating
                classModificator={ClassModificator.PROPERTY}
                rating={rating}
              />
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
                  <div className={`property__avatar-wrapper ${host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
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
                comments={comments}
                countComments={countComments}
                isAuth={isAuth}
                onCommentSubmit={onCommentSubmit}
                responseStatus={responseStatus}
              />}
            </div>
          </div>
          {<Map
            classModificator={ClassModificator.PROPERTY_MAP}
            currentCityOffers={offersNearby}
            focusOffer={focusOffer}
            currentOfferCoordinate={CURRENT_OFFER_COORDINATE}
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

const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state),
  authStatus: getAuthorizationStatus(state),
  comments: getCommentsByShow(state),
  countComments: getCountComments(state),
  offersNearby: getOffersNearby(state),
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
