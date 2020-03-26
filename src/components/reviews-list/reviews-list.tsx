import * as React from 'react';
import {
  Comment
} from "../../types";
import ReviewItem from "../review-item/review-item";

interface Props {
  comments: Comment[];
}

const ReviewsList: React.FC<Props> = (props: Props) => {
  const {
    comments
  } = props;

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
};

// ReviewsList.propTypes = {
//   comments: arrayOf(
//       commentsPropTypes
//   ).isRequired,
// };

export default ReviewsList;
