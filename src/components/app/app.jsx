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
} from "../../types.js";
import {
  setCurrentCity,
  getOffersList,
  setActiveOffer,
  setFocusOffer
} from "../../actions/actions.js";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import Locations from "../locations/locations.jsx";
import Cities from "../cities/cities.jsx";
import Page from "../page/page.jsx";

class App extends PureComponent {
  _renderApp() {
    const {
      activeOffer,
      locations,
      handleLocationClick,
      offers,
      currentCity,
      currentSort,
      handleHeaderOfferClick,
      onCardHover,
      focusOffer
    } = this.props;

    if (activeOffer === undefined) {
      return (
        <Page
          className={
            `page--gray page--main`
          }
        >
          <Main>
            <Locations
              locations={locations}
              handleLocationClick={handleLocationClick}
              currentCity={currentCity}
            />
            <Cities
              offers={offers}
              currentSort={currentSort}
              handleHeaderOfferClick={handleHeaderOfferClick}
              onCardHover={onCardHover}
              focusOffer={focusOffer}
            />
          </Main>
        </Page>
      );
    } else {
      return (
        <Page>
          <Property />
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
  locations: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  currentCity: PropTypes.string.isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired,
  focusOffer: offerPropTypes
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  locations: state.locations,
  activeOffer: state.activeOffer,
  currentCity: state.currentCity,
  currentSort: state.currentSort,
});

const mapDispatchToProps = (dispatch) => ({
  handleLocationClick(location) {
    dispatch(setCurrentCity(location));
    dispatch(getOffersList());
  },
  handleHeaderOfferClick(offer) {
    dispatch(setActiveOffer(offer));
  },
  onCardHover(offer) {
    dispatch(setFocusOffer(offer));
  }
});

export {
  App
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
