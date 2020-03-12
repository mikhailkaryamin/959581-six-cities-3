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
  getUniqueArray
} from "../../utils.js";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import Locations from "../locations/locations.jsx";
import Cities from "../cities/cities.jsx";
import Page from "../page/page.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {
  getCurrentCity,
} from '../../reducer/city/selectors.js';
import {
  getOffers,
} from '../../reducer/data/selectors.js';
import {
  getActiveOffer,
  getFocusOffer,
} from '../../reducer/offer/selectors.js';
import {
  getCurrentSort,
} from '../../reducer/sort/selectors.js';
import {
  ActionCreator as ActionCity
} from '../../reducer/city/city.js';
import {
  ActionCreator as ActionOffer
} from '../../reducer/offer/offer.js';
import {
  ActionCreator as ActionSort
} from '../../reducer/sort/sort.js';

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
          <Main isEmpty={offers.length === 0}>
            <React.Fragment>
              <LocationsWrapped
                locations={locations}
                handleLocationClick={handleLocationClick}
                currentCity={currentCity}
              />
              <Cities
                offersCurrentCity={offersCurrentCity}
                currentCity={currentCity}
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
  activeOffer: getActiveOffer(state),
  currentCity: getCurrentCity(state),
  currentSort: getCurrentSort(state),
  focusOffer: getFocusOffer(state),
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleLocationClick(location) {
    dispatch(ActionCity.setCurrentCity(location));
  },
  handleHeaderOfferClick(offer) {
    dispatch(ActionOffer.setActiveOffer(offer));
  },
  onCardHover(offer) {
    dispatch(ActionOffer.setFocusOffer(offer));
  },
  handleSortChange(sort) {
    dispatch(ActionSort.setCurrentSort(sort));
  }
});

export {
  App
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
