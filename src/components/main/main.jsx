import React,
{
  PureComponent
} from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Locations from "../locations/locations.jsx";
import Cities from "../cities/cities.jsx";

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      offers,
      handleHeaderOfferClick
    } = this.props;

    return (
      <div className="page page--gray page--main">
        {<Header />}
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            {<Locations />}
          </div>
          {<Cities
            offers={
              offers
            }
            handleHeaderOfferClick={
              handleHeaderOfferClick
            }
          />}
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        mark: PropTypes.string,
      })
  ).isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
};

export default Main;

