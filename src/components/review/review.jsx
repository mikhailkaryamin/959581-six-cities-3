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
      comment
    } = this.props;
    console.log(new Date(comment.date))

    // const dateTime = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    // const dateMonthYearOptions = {
    //   month: `long`,
    //   day: `numeric`,
    //   year: `numeric`
    // };

    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={comment.user.avatar_url} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${ONE_STAR * comment.rating}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {comment.comment}
          </p>
          <time className="reviews__time" dateTime={comment.date}>
            {comment.date}
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
