import React,
{
  PureComponent
} from "react";
import {
  arrayOf,
  func,
  string,
} from "prop-types";
import {
  ClassModificator
} from "../../consts";
import {
  offerPropTypes,
} from "../../types";
import PlacesCardList from "../place-card-list/place-card-list";
import PlacesSort from "../places-sort/places-sort";
import withToggle from "../../hocs/with-toggle/with-toggle";

const PlacesSortWrapped = withToggle(PlacesSort);

class Places extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classModificator,
      currentCityOffers,
      currentSort,
      currentCity,
      handleSortChange,
      onCardHover,
      onCardLeave,
    } = this.props;

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
  }
}

Places.propTypes = {
  classModificator: string.isRequired,
  currentCityOffers: arrayOf(
      offerPropTypes
  ).isRequired,
  currentSort: string,
  currentCity: string,
  handleSortChange: func,
  onCardHover: func.isRequired,
  onCardLeave: func.isRequired,
};

Places.defaultProps = {
  reviews: [],
  currentSort: `Popular`,
  handleSortChange: () => {},
};

export default Places;
