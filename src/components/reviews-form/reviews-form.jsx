import React, {
  PureComponent,
  createRef
} from "react";
import {
  func,
  number,
  string,
} from 'prop-types';
import {
  STARS,
  RESPONSE_STATUS_OK,
} from "../../consts.js";

class ReviewsForm extends PureComponent {
  constructor(props) {
    super(props);
    this._submitButtonRef = createRef();
    this._textAreaRef = createRef();
    this._setDisabledOnClick = this._setDisabledOnClick.bind(this);
    this._checkTextAreaDisabled = this._checkTextAreaDisabled.bind(this);
  }

  componentDidMount() {
    this._submitButtonRef.current.disabled = true;
  }

  componentDidUpdate(prevProps) {
    this._checkTextAreaDisabled(prevProps);
    this._checkSubmitDisabled();
  }

  _setDisabledOnClick() {
    this._submitButtonRef.current.disabled = true;
    this._textAreaRef.current.disabled = true;
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

  _checkTextAreaDisabled(prevProps) {
    const {
      responseStatus,
      countComments,
    } = prevProps;

    const isOkResponse = responseStatus === RESPONSE_STATUS_OK || responseStatus === null;

    if (isOkResponse && countComments < this.props.countComments) {
      this._textAreaRef.current.disabled = false;
    }
  }

  render() {
    const {
      comment,
      onChange,
      onSubmit,
      rating,
    } = this.props;

    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={onSubmit}
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
                checked={rating === numberStars}
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
          ref={this._textAreaRef}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
              To submit review please make sure to set
            <span className="reviews__star">rating</span>
              and describe your stay with at least
            <b className="reviews__text-amount">
              50 characters
            </b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled=""
            onClick={this._setDisabledOnClick}
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
  comment: string.isRequired,
  countComments: number.isRequired,
  onChange: func.isRequired,
  onSubmit: func.isRequired,
  rating: number.isRequired,
};

export default ReviewsForm;
