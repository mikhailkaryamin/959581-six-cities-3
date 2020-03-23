import React, {
  PureComponent
} from "react";
import {
  arrayOf,
} from "prop-types";
import {
  commentsPropTypes
} from "../../types.js";
import Review from "../review/review.jsx";

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
  comments: arrayOf(
      commentsPropTypes
  ).isRequired,
};

export default ReviewsList;
