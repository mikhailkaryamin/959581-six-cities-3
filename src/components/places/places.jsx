import React,
{
  PureComponent
} from "react";
import PropTypes from "prop-types";
import {
  ModificatorClass
} from "../../consts.js";
import {
  offerPropTypes
} from "../../types.js";
import PlacesCardList from "../place-card-list/place-card-list.jsx";
import PlacesSort from "../places-sort/places-sort.jsx";
import withToggle from "../../hocs/with-toggle/with-toggle.js";

const PlacesSortWrapped = withToggle(PlacesSort);

class Places extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      modificatorClass,
      offersCurrentCity,
      currentSort,
      handleHeaderOfferClick,
      onCardHover,
      handleSortChange,
    } = this.props;

    const AVAILABLE_OFFERS = offersCurrentCity.length;
    const CURRENT_CITY = offersCurrentCity[0].city.name;

    return (
      <section className={`places ${modificatorClass}`}>
        {modificatorClass === ModificatorClass.CITIES_PLACES &&
          <React.Fragment>
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {
                AVAILABLE_OFFERS
              } places to stay in {
                CURRENT_CITY
              }
            </b>
            {<PlacesSortWrapped
              handleSortChange={handleSortChange}
              currentSort={currentSort}
            />}
            {<PlacesCardList
              modificatorClass={ModificatorClass.CITIES_PLACES_LIST}
              offersCurrentCity={offersCurrentCity}
              currentSort={currentSort}
              handleHeaderOfferClick={handleHeaderOfferClick}
              onCardHover={onCardHover}
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
              offersCurrentCity={
                offersCurrentCity
              }
              currentSort={
                currentSort
              }
              handleHeaderOfferClick={
                handleHeaderOfferClick
              }
              onCardHover={onCardHover}
            />}
          </React.Fragment>
        }
      </section>
    );
  }
}

Places.propTypes = {
  offersCurrentCity: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  modificatorClass: PropTypes.string.isRequired,
  currentSort: PropTypes.string.isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

export default Places;
