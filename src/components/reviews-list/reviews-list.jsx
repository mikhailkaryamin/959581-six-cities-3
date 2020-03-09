import React, {
  PureComponent
} from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";
import {
  reviewsPropTypes
} from "../../types.js";

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      reviews
    } = this.props;

    return (
      <ul className="reviews__list">
        {reviews.map((review) =>
          <Review
            key={`${review.id}`}
            review={review}
          />
        )}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      reviewsPropTypes
  ).isRequired,
};

export default ReviewsList;
