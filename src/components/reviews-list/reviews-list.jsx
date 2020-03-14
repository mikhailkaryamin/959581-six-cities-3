import React, {
  PureComponent
} from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";
import {
  commentsPropTypes
} from "../../types.js";

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      comments
    } = this.props;

    return (
      <ul className="reviews__list">
        {comments.map((comment) =>
          <Review
            key={`${comment.id}`}
            comment={comment}
          />
        )}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(
      commentsPropTypes
  ).isRequired,
};

export default ReviewsList;
