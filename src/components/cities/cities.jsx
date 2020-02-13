import React,
{
  PureComponent
} from "react";
import Places from "../places/places.jsx";
import PropTypes from "prop-types";

class Cities extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      offers,
      handleHeaderOfferClick
    } = this.props;
    return (
      <div className="cities">
        <div className="cities__places-container container">
          <Places
            offers={
              offers
            }
            handleHeaderOfferClick={
              handleHeaderOfferClick
            }
          />
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    );
  }
}

Cities.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        mark: PropTypes.string,
      })
  ).isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
};
export default Cities;

