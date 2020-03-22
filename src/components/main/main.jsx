import React, {
  PureComponent
} from "react";
import {
  connect
} from 'react-redux';
import PropTypes from "prop-types";
import Locations from "../locations/locations.jsx";
import {
  ActionCreator as ActionCity
} from '../../reducer/city/city.js';
import {
  ActionCreator as ActionSort
} from '../../reducer/sort/sort.js';
import {
  offerPropTypes
} from "../../types.js";
import Cities from "../cities/cities.jsx";

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isEmpty,
      locations,
      currentCityOffers,
      currentCity,
      currentSort,
      focusOffer,
      handleLocationClick,
      handleSortChange,
      onCardHover,
      onCardLeave,
    } = this.props;

    return (
      <main className={`page__main page__main--index ${isEmpty ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        {isEmpty || <React.Fragment>
          <Locations
            locations={locations}
            handleLocationClick={handleLocationClick}
            currentCity={currentCity}
          />
          <Cities
            currentCityOffers={currentCityOffers}
            currentCity={currentCity}
            currentSort={currentSort}
            onCardHover={onCardHover}
            onCardLeave={onCardLeave}
            focusOffer={focusOffer}
            handleSortChange={handleSortChange}
          />
        </React.Fragment>}
        {isEmpty && <Locations
          locations={locations}
          handleLocationClick={handleLocationClick}
          currentCity={currentCity}
        />}
      </main>
    );
  }
}

Main.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  locations: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  currentCityOffers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  focusOffer: offerPropTypes,
  currentSort: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  handleLocationClick: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleLocationClick(location) {
    dispatch(ActionCity.setCurrentCity(location));
  },
  handleSortChange(sort) {
    dispatch(ActionSort.setCurrentSort(sort));
  },
});

export {
  Main
};

export default connect(null, mapDispatchToProps)(Main);
