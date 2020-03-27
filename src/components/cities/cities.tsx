import * as React from 'react';
import {
  Offer,
} from '../../types';
import {
  ClassModificator
} from "../../consts";
import Map from "../map/map";
import Places from "../places/places";

interface Props {
  currentCity: string;
  currentSort: string;
  currentCityOffers: Offer[];
  focusOffer: Offer;
  onCardHover: () => void;
  onCardLeave: () => void;
  handleSortChange: () => void;
}

const Cities: React.FC<Props> = (props: Props) => {
  const {
    currentCityOffers,
    currentSort,
    currentCity,
    focusOffer,
    handleSortChange,
    onCardHover,
    onCardLeave,
  } = props;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <Places
          classModificator={ClassModificator.CITIES_PLACES}
          currentCity={currentCity}
          currentCityOffers={currentCityOffers}
          currentSort={currentSort}
          handleSortChange={handleSortChange}
          onCardHover={onCardHover}
          onCardLeave={onCardLeave}
        />
        <div className="cities__right-section">
          <Map
            classModificator={ClassModificator.CITIES_MAP}
            currentCityOffers={currentCityOffers}
            focusOffer={focusOffer}
          />
        </div>
      </div>
    </div>
  );
};

export default Cities;
