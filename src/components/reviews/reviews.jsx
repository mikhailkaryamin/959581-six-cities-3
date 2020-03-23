import React from "react";
import {
  arrayOf,
  bool,
  func,
} from "prop-types";
import {
  commentsPropTypes
} from "../../types.js";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import ReviewsForm from "../reviews-form/reviews-form.jsx";
import withCommentData from '../../hocs/with-comment-data/with-comment-data.js';

const ReviewsFormWrapped = withCommentData(ReviewsForm);

const Reviews = (props) => {
  const {
    comments,
    isAuth,
    onCommentSubmit,
  } = props;

  const NUMBER_COMMENTS = comments.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {NUMBER_COMMENTS}
        </span>
      </h2>
      {<ReviewsList
        comments={comments}
      />}
      {isAuth &&
        <ReviewsFormWrapped
          numberComments={NUMBER_COMMENTS}
          onCommentSubmit={onCommentSubmit}
        />
      }
    </section>
  );
};

Reviews.propTypes = {
  comments: arrayOf(
      commentsPropTypes
  ),
  isAuth: bool.isRequired,
  onCommentSubmit: func.isRequired,
};

export default Reviews;
