import React, {
  PureComponent
} from "react";
import {
  reviewsPropTypes
} from "../../types.js";
import {
  ONE_STAR
} from "../../consts.js";

class Review extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      review
    } = this.props;

    const {
      user,
      rating,
      comment,
      date
    } = review;
    const {
      name,
      avatarURL
    } = user;

    const dateTime = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    const dateMonthYearOptions = {
      month: `long`,
      day: `numeric`,
      year: `numeric`
    };

    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={avatarURL} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${ONE_STAR * rating}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {comment}
          </p>
          <time className="reviews__time" dateTime={dateTime}>
            {date.toLocaleString(`en-US`, dateMonthYearOptions)}
          </time>
        </div>
      </li>
    );
  }
}

Review.propTypes = {
  review: reviewsPropTypes,
};
export default Review;
