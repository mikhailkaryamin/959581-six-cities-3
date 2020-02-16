import React,
{
  PureComponent
} from "react";
import PropTypes from "prop-types";
import {
  offerPropTypes
} from "../../types.js";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const ONE_STAR = 20;

    const {
      offer,
      handleHeaderOfferClick,
      onMouseEnter,
      onMouseLeave,
    } = this.props;

    const {
      src,
      price,
      rating,
      name,
      type,
      mark
    } = offer;

    return (
      <article
        className="cities__place-card place-card"
        onMouseEnter={() => {
          onMouseEnter(offer);
        }}
        onMouseLeave={() => {
          onMouseLeave();
        }}
      >
        {mark ?
          <div className="place-card__mark">
            <span>
              Premium
            </span>
          </div>
          :
          ``
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={src[0]} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;
                {price}
              </b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${ONE_STAR * rating}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2
            className="place-card__name"
            onClick={() => {
              handleHeaderOfferClick(offer);
            }}
          >
            <a href="#" >
              {name}
            </a>
          </h2>
          <p className="place-card__type">
            {type}
          </p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: offerPropTypes,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default PlaceCard;
