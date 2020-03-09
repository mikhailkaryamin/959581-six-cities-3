import React,
{
  PureComponent
} from "react";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import {
  connect
} from "react-redux";
import PropTypes from "prop-types";
import {
  offerPropTypes,
  reviewsPropTypes
} from "../../types.js";
import {
  setCurrentCity,
  setCurrentSort,
  setActiveOffer,
  setFocusOffer
} from "../../actions/actions.js";
import {
  getUniqueArray
} from "../../utils.js";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import Locations from "../locations/locations.jsx";
import Cities from "../cities/cities.jsx";
import Page from "../page/page.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

const LocationsWrapped = withActiveItem(Locations);

class App extends PureComponent {
  _getLocations(offers) {
    const locations = offers
      .map((offer) => offer.city.name);
    return getUniqueArray(locations);
  }

  _getOffersCurrentCity(offers, currentCity) {
    return offers
      .filter((offer) => offer.city.name === currentCity);
  }

  _renderApp() {
    const {
      activeOffer,
      handleLocationClick,
      offers,
      currentCity,
      currentSort,
      handleHeaderOfferClick,
      handleSortChange,
      onCardHover,
      focusOffer,
      reviews
    } = this.props;

    const locations = this._getLocations(offers);
    const offersCurrentCity = this._getOffersCurrentCity(offers, currentCity);

    if (activeOffer === undefined) {
      return (
        <Page
          className={
            `page--gray page--main`
          }
        >
          <Main>
            <React.Fragment>
              <LocationsWrapped
                locations={locations}
                handleLocationClick={handleLocationClick}
                currentCity={currentCity}
              />
              <Cities
                offersCurrentCity={offersCurrentCity}
                currentSort={currentSort}
                handleHeaderOfferClick={handleHeaderOfferClick}
                onCardHover={onCardHover}
                focusOffer={focusOffer}
                handleSortChange={handleSortChange}
              />
            </React.Fragment>
          </Main>
        </Page>
      );
    } else {
      return (
        <Page>
          <Property
            activeOffer={activeOffer}
            reviews={reviews}
            offersCurrentCity={offersCurrentCity}
            currentSort={currentSort}
            onCardHover={onCardHover}
            focusOffer={focusOffer}
            handleHeaderOfferClick={handleHeaderOfferClick}
          />
        </Page>
      );
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {
              this._renderApp()
            }
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  activeOffer: offerPropTypes,
  handleLocationClick: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired,
  focusOffer: offerPropTypes,
  handleSortChange: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
      reviewsPropTypes
  ).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activeOffer: state.activeOffer,
  currentCity: state.currentCity,
  currentSort: state.currentSort,
  focusOffer: state.focusOffer,
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  handleLocationClick(location) {
    dispatch(setCurrentCity(location));
  },
  handleHeaderOfferClick(offer) {
    dispatch(setActiveOffer(offer));
  },
  onCardHover(offer) {
    dispatch(setFocusOffer(offer));
  },
  handleSortChange(sort) {
    dispatch(setCurrentSort(sort));
  }
});

export {
  App
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
