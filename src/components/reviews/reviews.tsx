import * as React from 'react';
import {
  Comment
} from "../../types";
import ReviewsList from "../reviews-list/reviews-list";
import ReviewsForm from "../reviews-form/reviews-form";
import withCommentData from '../../hocs/with-comment-data/with-comment-data';

interface Props {
  comments: Comment[];
  countComments: number;
  isAuth: boolean;
  onCommentSubmit: () => void;
  responseStatus: number | null;
}

const ReviewsFormWrapped = withCommentData(ReviewsForm);

const Reviews: React.FC<Props> = (props: Props) => {
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

// Reviews.propTypes = {
//   comments: arrayOf(
//       commentsPropTypes
//   ),
//   countComments: number.isRequired,
//   isAuth: bool.isRequired,
//   onCommentSubmit: func.isRequired,
//   responseStatus: number,
// };

export default Reviews;
