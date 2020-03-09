import React from "react";
import PropTypes from "prop-types";
import {
  reviewsPropTypes
} from "../../types.js";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import ReviewsForm from "../reviews-form/reviews-form.jsx";

const Reviews = (props) => {
  const {
    reviews
  } = props;

  const NUMBER_REVIEWS = reviews.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {NUMBER_REVIEWS}
        </span>
      </h2>
      {<ReviewsList
        reviews={reviews}
      />}
      {<ReviewsForm />}
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
      reviewsPropTypes
  ).isRequired,
};

export default Reviews;
