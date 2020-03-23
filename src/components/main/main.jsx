import React, {
  PureComponent
} from "react";
import {
  connect
} from 'react-redux';
import {
  arrayOf,
  func,
  string,
} from "prop-types";
import {
  offerPropTypes
} from "../../types.js";
import {
  ActionCreator as ActionCity
} from '../../reducer/city/city.js';
import {
  ActionCreator as ActionSort
} from '../../reducer/sort/sort.js';
import Cities from "../cities/cities.jsx";
import Locations from "../locations/locations.jsx";

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      currentCityOffers,
      currentCity,
      currentSort,
      focusOffer,
      handleLocationClick,
      handleSortChange,
      locations,
      onCardHover,
      onCardLeave,
    } = this.props;

    const isLoadingCurrentCityOffers = currentCityOffers.length === 0;

    if (isLoadingCurrentCityOffers) {
      return ``;
    }

    return (
      <main className={`page__main page__main--index`}>
        <h1 className="visually-hidden">Cities</h1>
        <Locations
          currentCity={currentCity}
          handleLocationClick={handleLocationClick}
          locations={locations}
        />
        <Cities
          currentCityOffers={currentCityOffers}
          focusOffer={focusOffer}
          currentCity={currentCity}
          currentSort={currentSort}
          handleSortChange={handleSortChange}
          onCardHover={onCardHover}
          onCardLeave={onCardLeave}
        />
      </main>
    );
  }
}

Main.propTypes = {
  currentCityOffers: arrayOf(
      offerPropTypes
  ).isRequired,
  currentSort: string.isRequired,
  currentCity: string.isRequired,
  focusOffer: offerPropTypes,
  handleLocationClick: func.isRequired,
  handleSortChange: func.isRequired,
  locations: arrayOf(
      string
  ).isRequired,
  onCardHover: func.isRequired,
  onCardLeave: func.isRequired,
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
