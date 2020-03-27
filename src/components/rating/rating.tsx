import * as React from 'react';
import {
  ONE_STAR,
  ClassModificator
} from "../../consts";

interface Props {
  classModificator: string;
  rating: number;
}

const Rating: React.FC<Props> = (props: Props) => {
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

export default Rating;
