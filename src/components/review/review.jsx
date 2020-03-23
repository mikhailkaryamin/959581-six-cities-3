import React, {
  PureComponent
} from "react";
import {
  commentsPropTypes
} from "../../types.js";
import {
  ONE_STAR
} from "../../consts.js";

class Review extends PureComponent {
  constructor(props) {
    super(props);
  }

  _getDate(date) {
    const dateMonthYearOptions = {
      month: `long`,
      year: `numeric`
    };

    return `${
      new Date(date)
        .toLocaleString(`en-EN`, dateMonthYearOptions)
    }`;
  }

  render() {
    const {
      comment
    } = this.props;

    const {
      date,
      name,
      rating,
      user,
    } = comment;

    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img
              className="reviews__avatar user__avatar"
              src={user.avatarUrl}
              width="54"
              height="54"
              alt="Reviews avatar"
            />
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
            {comment.comment}
          </p>
          <time className="reviews__time" dateTime={date}>
            {this._getDate(date)}
          </time>
        </div>
      </li>
    );
  }
}

Review.propTypes = {
  comment: commentsPropTypes,
};

export default Review;
