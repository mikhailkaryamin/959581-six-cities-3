import React from "react";
import PropTypes from "prop-types";
import {
  commentsPropTypes
} from "../../types.js";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import ReviewsForm from "../reviews-form/reviews-form.jsx";
import withRating from '../../hocs/with-rating/with-rating.js';

const ReviewsFormWrapped = withRating(ReviewsForm);

const Reviews = (props) => {
  const {
    comments,
    onCommentSubmit,
  } = props;

  const NUMBER_REVIEWS = comments.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {NUMBER_REVIEWS}
        </span>
      </h2>
      {<ReviewsList
        comments={comments}
      />}
      {<ReviewsFormWrapped
        onCommentSubmit={onCommentSubmit}
      />}
    </section>
  );
};

Reviews.propTypes = {
  comments: PropTypes.arrayOf(
      commentsPropTypes
  ),
  onCommentSubmit: PropTypes.func.isRequired,
};

export default Reviews;
