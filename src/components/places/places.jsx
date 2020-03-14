import React,
{
  PureComponent
} from "react";
import PropTypes from "prop-types";
import {
  ModificatorClass
} from "../../consts.js";
import {
  offerPropTypes,
} from "../../types.js";
import PlacesCardList from "../place-card-list/place-card-list.jsx";
import PlacesSort from "../places-sort/places-sort.jsx";
import withToggle from "../../hocs/with-toggle/with-toggle.js";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

const PlacesSortWrapped = withToggle(PlacesSort);
const PlacesCardListWrapped = withActiveItem(PlacesCardList);

class Places extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      modificatorClass,
      currentCityOffers,
      currentSort,
      currentCity,
      handleHeaderOfferClick,
      onCardHover,
      handleSortChange,
    } = this.props;

    const AVAILABLE_OFFERS = currentCityOffers.length;

    return (
      <section className={`places ${modificatorClass}`}>
        {modificatorClass === ModificatorClass.CITIES_PLACES &&
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
              handleSortChange={handleSortChange}
              currentSort={currentSort}
            />}
            {<PlacesCardListWrapped
              modificatorClass={ModificatorClass.CITIES_PLACES_LIST}
              currentCityOffers={currentCityOffers}
              currentSort={currentSort}
              handleHeaderOfferClick={handleHeaderOfferClick}
              onCardHover={onCardHover}
            />}
          </React.Fragment>
        }

        {modificatorClass === ModificatorClass.NEAR_PLACES &&
          <React.Fragment>
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            {<PlacesCardListWrapped
              modificatorClass={ModificatorClass.NEAR_PLACES_LIST}
              currentCityOffers={currentCityOffers}
              currentSort={currentSort}
              handleHeaderOfferClick={handleHeaderOfferClick}
              onCardHover={onCardHover}
            />}
          </React.Fragment>
        }
      </section>
    );
  }
}

Places.propTypes = {
  currentCityOffers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  modificatorClass: PropTypes.string.isRequired,
  currentSort: PropTypes.string,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func,
  currentCity: PropTypes.string,
};

Places.defaultProps = {
  reviews: [],
  currentSort: `Popular`,
  handleSortChange: () => {},
};

export default Places;
