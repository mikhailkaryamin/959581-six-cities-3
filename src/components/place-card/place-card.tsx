import * as React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  ClassModificator as ClassName
} from "../../consts";
import {
  Offer
} from '../../types';
import FavoriteButton from "../favorite-button/favorite-button";
import Rating from '../rating/rating';

interface Props {
  classModificator: string;
  offer: Offer;
  onMouseEnter: (Offer) => void;
  onMouseLeave: () => void;
}

const PlaceCard: React.FC<Props> = (props: Props) => {
  const {
    classModificator,
    offer,
    onMouseEnter,
    onMouseLeave,
  } = props;

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
      {(isPremium && classModificator !== ClassName.FAVORITES) &&
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
            width={classModificator === ClassName.FAVORITES ? 150 : 260}
            height={classModificator === ClassName.FAVORITES ? 110 : 200}
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
          classModificator={ClassName.PLACE_CARD}
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
};

export default PlaceCard;
