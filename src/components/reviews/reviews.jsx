import React from "react";
import PropTypes from "prop-types";
import {
  commentsPropTypes
} from "../../types.js";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import ReviewsForm from "../reviews-form/reviews-form.jsx";

const Reviews = (props) => {
  const {
    comments
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
      {<ReviewsForm />}
    </section>
  );
};

Reviews.propTypes = {
  comments: PropTypes.arrayOf(
      commentsPropTypes
  ),
};

export default Reviews;
