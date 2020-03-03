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
      availableOffers,
      currentCity,
      modificatorClass,
      offers,
      currentSort,
      handleHeaderOfferClick,
      handlePlaceCardMouseEnter,
      handlePlaceCardMouseLeave,
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
            {<PlacesSortWrapped />}
            {<PlacesCardList
              modificatorClass={
                ModificatorClass.CITIES_PLACES_LIST
              }
              offers={
                offers
              }
              currentSort={
                currentSort
              }
              handleHeaderOfferClick={
                handleHeaderOfferClick
              }
              // handlePlaceCardMouseEnter={
              //   handlePlaceCardMouseEnter
              // }
              // handlePlaceCardMouseLeave={
              //   handlePlaceCardMouseLeave
              // }
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
              offers={
                offers
              }
              currentSort={
                currentSort
              }
              handleHeaderOfferClick={
                handleHeaderOfferClick
              }
              // handlePlaceCardMouseEnter={
              //   handlePlaceCardMouseEnter
              // }
              // handlePlaceCardMouseLeave={
              //   handlePlaceCardMouseLeave
              // }
            />}
          </React.Fragment>
        }
      </section>
    );
  }
}

Places.propTypes = {
  offers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  availableOffers: PropTypes.number.isRequired,
  modificatorClass: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  currentSort: PropTypes.string.isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  handlePlaceCardMouseEnter: PropTypes.func.isRequired,
  handlePlaceCardMouseLeave: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  availableOffers: state.availableOffers,
  currentCity: state.currentCity,
  offers: state.offers,
  currentSort: state.currentSort,
});

// const mapDispatchToProps = (dispatch) => ({
//   handleHeaderOfferClick(offer) {
//     dispatch(setActiveOffer(offer));
//   },
//   handlePlaceCardMouseEnter(offer) {
//     dispatch(setFocusOffer(offer));
//     dispatch(getCoordinatesWithoutActive());
//     dispatch(setFocusCoordinate(offer.coordinate));
//   },
//   handlePlaceCardMouseLeave() {
//     dispatch(removeFocusOffer());
//     dispatch(removeFocusCoordinate());
//     dispatch(getCoordinatesWithoutActive());
//   }
// });

export default Places;
