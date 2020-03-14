import React,
{
  PureComponent
} from "react";
import PropTypes from "prop-types";
import {
  ONE_STAR
} from "../../consts.js";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      offer,
      handleHeaderOfferClick,
      onMouseEnter,
      onMouseLeave,
      handleActiveItem,
    } = this.props;

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
        {offer.is_premium ?
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
            <img className="place-card__image" src={offer.preview_image} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;
                {offer.price}
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
              <span style={{width: `${ONE_STAR * offer.rating}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2
            className="place-card__name"
            onClick={() => {
              handleHeaderOfferClick(offer);
              handleActiveItem(offer);
            }}
          >
            <a href="#" >
              {offer.title}
            </a>
          </h2>
          <p className="place-card__type">
            {offer.type}
          </p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    preview_image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    is_premium: PropTypes.bool.isRequired,
  }).isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  handleActiveItem: PropTypes.func.isRequired,
};

export default PlaceCard;
