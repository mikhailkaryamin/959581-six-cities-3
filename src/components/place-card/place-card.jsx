import React,
{
  PureComponent
} from "react";
import {
  Link
} from 'react-router-dom';
import PropTypes from "prop-types";
import {
  ONE_STAR,
  ClassModificator
} from "../../consts.js";
import FavoriteButton from "../favorite-button/favorite-button.jsx";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classModificator,
      offer,
      onMouseEnter,
      onMouseLeave,
      handleActiveItem,
    } = this.props;

    const {
      previewImage,
      isPremium,
      rating,
      title,
      type,
      id,
      price,
    } = offer;

    return (
      <article
        className={`${classModificator}__place-card place-card`}
        onMouseEnter={() => {
          onMouseEnter(offer);
        }}
        onMouseLeave={() => {
          onMouseLeave();
        }}
      >
        {isPremium && classModificator !== ClassModificator.FAVORITES ?
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
            <img
              className="place-card__image"
              src={previewImage}
              width={classModificator === ClassModificator.FAVORITES ? 150 : 260}
              height={classModificator === ClassModificator.FAVORITES ? 110 : 200}
              alt="Place image"
            />
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
            <FavoriteButton
              id={id}
              width={18}
              height={19}
              classModificator={classModificator}
            />
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
              handleActiveItem(offer);
            }}
          >
            <Link to={`/offer/${id}`}>{title}</Link>
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
  offer: PropTypes.shape({
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  classModificator: PropTypes.string.isRequired,
};

export default PlaceCard;
