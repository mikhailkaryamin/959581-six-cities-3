import React, {
  PureComponent,
  createRef
} from "react";
import PropTypes from 'prop-types';
import {
  STARS
} from "../../consts.js";

class ReviewsForm extends PureComponent {
  constructor(props) {
    super(props);
    this._submitButtonRef = createRef();
    this._fieldsetRef = createRef();
    this._handleSubmit = createRef();
  }

  componentDidMount() {
    this._submitButtonRef.current.disabled = true;
  }

  componentDidUpdate() {
    this._checkSubmitDisabled();
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._submitButtonRef.current.disabled = true;
    this._fieldsetRef.current.disabled = true;
    this.props.onSubmit();
  }

  _checkSubmitDisabled() {
    const {
      rating,
      comment,
    } = this.props;

    if (rating === 0 || comment.length <= 50 || comment.length >= 300) {
      this._submitButtonRef.current.disabled = true;
    } else {
      this._submitButtonRef.current.disabled = false;
    }
  }

  render() {
    const {
      comment,
      onChange,
    } = this.props;

    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={() => this._handleSubmit}
      >
        <fieldset
          ref={this._fieldsetRef}
          style={{border: `none`, padding: `0`}}
        >
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            {STARS.map((numberStars) => (
              <React.Fragment key={`${numberStars}-stars`}>
                <input className="form__rating-input visually-hidden"
                  name="rating"
                  value={numberStars}
                  id={`${numberStars}-stars`}
                  type="radio"
                  onChange={onChange}
                />
                <label
                  htmlFor={`${numberStars}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            ))
            }
          </div>
          <textarea
            className="reviews__textarea form__textarea"
            id="review"
            name="review"
            placeholder="Tell how was your stay, what you like and what can be improved"
            value={comment}
            onChange={onChange}
          />
        </fieldset>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled=""
            ref={this._submitButtonRef}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}


ReviewsForm.propTypes = {
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ReviewsForm;
