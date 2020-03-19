import React, {
  PureComponent
} from "react";
import {
  connect
} from "react-redux";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PropTypes from "prop-types";
import {
  ActionCreator as ActionOffer
} from '../../reducer/offer/offer.js';
import {
  getCurrentCity
} from '../../reducer/city/selectors.js';
import {
  Operation as DataOperation
} from '../../reducer/data/data.js';
import {
  getLocations,
  getOffersCurrentCity,
} from '../../reducer/data/selectors.js';
import {
  getActiveOffer,
  getFocusOffer
} from '../../reducer/offer/selectors.js';
import {
  getCurrentSort
} from '../../reducer/sort/selectors.js';
import {
  offerPropTypes
} from "../../types.js";
import Main from "../main/main.jsx";
import Page from "../page/page.jsx";
import Property from "../property/property.jsx";

class App extends PureComponent {
  _renderApp() {
    const {
      activeOffer,
      currentCity,
      currentSort,
      locations,
      handleHeaderOfferClick,
      onCardHover,
      focusOffer,
      currentCityOffers,
    } = this.props;

    const isLoading = currentCityOffers.length === 0;

    if (isLoading) {
      return ``;
    }

    if (activeOffer === null && !isLoading) {
      return (
        <Page
          className={
            `page--gray page--main`
          }
        >
          <Main isEmpty={false}
            locations={locations}
            currentCity={currentCity}
            currentCityOffers={currentCityOffers}
            currentSort={currentSort}
            handleHeaderOfferClick={handleHeaderOfferClick}
            onCardHover={onCardHover}
            focusOffer={focusOffer}
          >
          </Main>
        </Page>
      );
    } else if (activeOffer !== null) {
      return (
        <Page>
          <Property
            activeOffer={activeOffer}
            currentCityOffers={currentCityOffers}
            currentSort={currentSort}
            onCardHover={onCardHover}
            focusOffer={focusOffer}
            handleHeaderOfferClick={handleHeaderOfferClick}
          />
        </Page>
      );
    }

    return (
      <Page
        className={
          `page--gray page--main`
        }
      >
        <Main isEmpty={true}
          locations={locations}
          currentCity={currentCity}
        >
        </Main>
      </Page>
    );
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
  currentCityOffers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  activeOffer: offerPropTypes,
  currentCity: PropTypes.string.isRequired,
  currentSort: PropTypes.string.isRequired,
  focusOffer: offerPropTypes,
  locations: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state),
  currentCity: getCurrentCity(state),
  currentSort: getCurrentSort(state),
  focusOffer: getFocusOffer(state),
  currentCityOffers: getOffersCurrentCity(state),
  locations: getLocations(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleHeaderOfferClick(offer) {
    dispatch(ActionOffer.setActiveOffer(offer));
    dispatch(DataOperation.loadComments());
    dispatch(DataOperation.loadOffersNearby());
  },
  onCardHover(offer) {
    dispatch(ActionOffer.setFocusOffer(offer));
  },
});

export {
  App
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
