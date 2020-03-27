import * as React from 'react';
import {
  connect
} from 'react-redux';
import {
  Offer
} from "../../types";
import {
  ActionCreator as ActionCity
} from '../../reducer/city/city';
import {
  ActionCreator as ActionSort
} from '../../reducer/sort/sort';
import Cities from "../cities/cities";
import Locations from "../locations/locations";

interface Props {
  currentCity: string;
  currentSort: string;
  currentCityOffers: Offer[];
  focusOffer: Offer;
  handleLocationClick: () => void;
  handleSortChange: () => void;
  locations: string[];
  onCardHover: () => void;
  onCardLeave: () => void;
}

class Main extends React.PureComponent<Props, {}> {
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
