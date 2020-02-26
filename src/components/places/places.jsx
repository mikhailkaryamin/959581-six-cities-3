import React,
{
  PureComponent
} from "react";
import {
  connect
} from "react-redux";
import PropTypes from "prop-types";
import PlacesCardList from "../place-card-list/place-card-list.jsx";
import {
  ModificatorClass
} from "../../consts.js";

class Places extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      availableOffers,
      currentCity,
      modificatorClass
    } = this.props;

    return (
      <section className={`places ${modificatorClass}`}>
        {modificatorClass === ModificatorClass.CITIES_PLACES &&
          <React.Fragment>
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {
                availableOffers
              } places to stay in {
                currentCity
              }
            </b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            {<PlacesCardList
              modificatorClass={
                ModificatorClass.CITIES_PLACES_LIST
              }
            />}
          </React.Fragment>
        }

        {modificatorClass === ModificatorClass.NEAR_PLACES &&
          <React.Fragment>
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            {<PlacesCardList
              modificatorClass={
                ModificatorClass.NEAR_PLACES_LIST
              }
            />}
          </React.Fragment>
        }
      </section>
    );
  }
}

Places.propTypes = {
  availableOffers: PropTypes.number.isRequired,
  modificatorClass: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  availableOffers: state.availableOffers,
  currentCity: state.currentCity,
});

export {
  Places
};

export default connect(mapStateToProps)(Places);
