import React, {
  PureComponent
} from "react";
import {
  arrayOf,
} from "prop-types";
import {
  commentsPropTypes
} from "../../types";
import ReviewItem from "../review-item/review-item";

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
        {comments
          .reverse()
          .map((comment) =>
            <ReviewItem
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
