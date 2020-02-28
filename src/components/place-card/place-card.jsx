import React,
{
  PureComponent
} from "react";
import PropTypes from "prop-types";
import {
  setActiveOffer,
  setFocusOffer,
  removeFocusOffer
} from "../../actions.js";
import {
  ONE_STAR
} from "../../consts.js";
import {
  connect
} from "react-redux";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      offer,
      handleHeaderOfferClick,
      handlePlaceCardMouseEnter,
      handlePlaceCardMouseLeave,
    } = this.props;

    const {
      src,
      price,
      rating,
      name,
      type,
      mark
    } = offer;

    return (
      <article
        className="cities__place-card place-card"
        onMouseEnter={() => {
          handlePlaceCardMouseEnter(offer);
        }}
        onMouseLeave={() => {
          handlePlaceCardMouseLeave();
        }}
      >
        {mark ?
          <div className="place-card__mark">
            <span>
              Premium
            </span>
          </div>
          :
          ``
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={src[0]} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;
                {price}
              </b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${ONE_STAR * rating}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2
            className="place-card__name"
            onClick={() => {
              handleHeaderOfferClick(offer);
            }}
          >
            <a href="#" >
              {name}
            </a>
          </h2>
          <p className="place-card__type">
            {type}
          </p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    src: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    mark: PropTypes.bool.isRequired,
  }).isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  handlePlaceCardMouseEnter: PropTypes.func.isRequired,
  handlePlaceCardMouseLeave: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleHeaderOfferClick(offer) {
    dispatch(setActiveOffer(offer));
  },
  handlePlaceCardMouseEnter(offer) {
    dispatch(setFocusOffer(offer));
  },
  handlePlaceCardMouseLeave() {
    dispatch(removeFocusOffer());
  }
});

export {
  PlaceCard
};

export default connect(null, mapDispatchToProps)(PlaceCard);
