import React from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import ReviewsForm from "../reviews-form/reviews-form.jsx";

const Reviews = (props) => {
  const {
    numberReviews
  } = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {numberReviews}
        </span>
      </h2>
      {<ReviewsList />}
      {<ReviewsForm />}
    </section>
  );
};

Reviews.propTypes = {
  numberReviews: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  numberReviews: state.numberReviews
});

export {
  Reviews
};

export default connect(mapStateToProps)(Reviews);
