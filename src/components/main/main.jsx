import React,
{
  PureComponent
} from "react";
import PropTypes from "prop-types";
import {
  offerPropTypes
} from "../../types.js";
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
      offerPropTypes
  ).isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
};

export default Main;

