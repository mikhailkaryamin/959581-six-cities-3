import React from 'react';
import {
  number,
  string,
} from 'prop-types';
import {
  ONE_STAR,
  ClassModificator
} from "../../consts.js";

const Rating = (props) => {
  const {
    classModificator,
    rating
  } = props;

  const ratingStyleWidth = Math.round(rating) * ONE_STAR;

  return (
    <div className={`${classModificator}__rating rating`}>
      <div className={`${classModificator}__stars rating__stars`}>
        <span style={{width: `${ratingStyleWidth}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {classModificator === ClassModificator.PROPERTY &&
        <span className={`${classModificator}__rating-value rating__value`}>
          {rating}
        </span>
      }
    </div>
  );
};

Rating.propTypes = {
  rating: number.isRequired,
  classModificator: string.isRequired,
};

export default Rating;
