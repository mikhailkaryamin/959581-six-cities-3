import * as React from 'react';
import {
  ClassModificator
} from "../../consts";
import {
  Offer,
} from "../../types";
import PlacesCardList from "../place-card-list/place-card-list";
import PlacesSort from "../places-sort/places-sort";
import withToggle from "../../hocs/with-toggle/with-toggle";

interface Props {
  classModificator: string;
  currentCity?: string;
  currentSort: string;
  currentCityOffers: Offer[];
  handleSortChange?: () => void;
  onCardHover: () => void;
  onCardLeave: () => void;
}

const PlacesSortWrapped = withToggle(PlacesSort);

const Places: React.FC<Props> = (props: Props) => {
  const {
    classModificator,
    currentCityOffers,
    currentSort,
    currentCity,
    handleSortChange,
    onCardHover,
    onCardLeave,
  } = props;

  const AVAILABLE_OFFERS = currentCityOffers.length;

  return (
    <section className={`places ${classModificator}`}>
      {classModificator === ClassModificator.CITIES_PLACES &&
        <React.Fragment>
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {
              AVAILABLE_OFFERS
            } places to stay in {
              currentCity
            }
          </b>
          {<PlacesSortWrapped
            currentSort={currentSort}
            handleSortChange={handleSortChange}
          />}
          {<PlacesCardList
            classModificator={ClassModificator.CITIES_PLACES_LIST}
            currentCityOffers={currentCityOffers}
            currentSort={currentSort}
            onCardHover={onCardHover}
            onCardLeave={onCardLeave}
          />}
        </React.Fragment>
      }

      {classModificator === ClassModificator.NEAR_PLACES &&
        <React.Fragment>
          <h2 className="near-places__title">Other places in the neighbourhood</h2>

          {<PlacesCardList
            classModificator={ClassModificator.NEAR_PLACES_LIST}
            currentCityOffers={currentCityOffers}
            currentSort={currentSort}
            onCardHover={onCardHover}
            onCardLeave={onCardLeave}
          />}
        </React.Fragment>
      }
    </section>
  );
};

export default Places;
