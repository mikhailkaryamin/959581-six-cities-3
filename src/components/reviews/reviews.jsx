import React from "react";
import {
  arrayOf,
  bool,
  func,
  number,
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
    countComments,
    isAuth,
    onCommentSubmit,
    responseStatus,
  } = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {countComments}
        </span>
      </h2>
      {<ReviewsList
        comments={comments}
      />}
      {isAuth &&
        <ReviewsFormWrapped
          countComments={countComments}
          onCommentSubmit={onCommentSubmit}
          responseStatus={responseStatus}
        />
      }
    </section>
  );
};

Reviews.propTypes = {
  comments: arrayOf(
      commentsPropTypes
  ),
  countComments: number.isRequired,
  isAuth: bool.isRequired,
  onCommentSubmit: func.isRequired,
  responseStatus: number,
};

export default Reviews;
