import React,
{
  PureComponent
} from "react";
import {
  Link
} from 'react-router-dom';
import {
  bool,
  func,
  number,
  shape,
  string,
} from "prop-types";
import {
  ClassModificator
} from "../../consts.js";
import FavoriteButton from "../favorite-button/favorite-button.jsx";
import Rating from '../rating/rating.jsx';

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
    } = this.props;

    const {
      id,
      isPremium,
      previewImage,
      price,
      rating,
      title,
      type,
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
        {(isPremium && classModificator !== ClassModificator.FAVORITES) &&
          <div className="place-card__mark">
            <span>
              Premium
            </span>
          </div>
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
              classModificator={classModificator}
              id={id}
              height={19}
              width={18}
            />
          </div>
          <Rating
            classModificator={ClassModificator.PLACE_CARD}
            rating={rating}
          />
          <h2
            className="place-card__name"
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
  classModificator: string.isRequired,
  offer: shape({
    previewImage: string.isRequired,
    price: number.isRequired,
    rating: number.isRequired,
    title: string.isRequired,
    type: string.isRequired,
    isPremium: bool.isRequired,
    id: number.isRequired,
  }).isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired,
};

export default PlaceCard;
