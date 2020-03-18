import PropTypes from "prop-types";
import React, {
  PureComponent
} from "react";
import {
  connect
} from "react-redux";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {
  ActionCreator as ActionCity
} from '../../reducer/city/city.js';
import {
  getCurrentCity
} from '../../reducer/city/selectors.js';
import {
  Operation as DataOperation
} from '../../reducer/data/data.js';
import {
  getLocations,
  getOffersCurrentCity,
  getComments,
  getOffersNearby,
} from '../../reducer/data/selectors.js';
import {
  ActionCreator as ActionOffer
} from '../../reducer/offer/offer.js';
import {
  getActiveOffer, getFocusOffer
} from '../../reducer/offer/selectors.js';
import {
  getCurrentSort
} from '../../reducer/sort/selectors.js';
import {
  ActionCreator as ActionSort
} from '../../reducer/sort/sort.js';
import {
  commentsPropTypes,
  offerPropTypes
} from "../../types.js";
import Cities from "../cities/cities.jsx";
import Locations from "../locations/locations.jsx";
import Main from "../main/main.jsx";
import Page from "../page/page.jsx";
import Property from "../property/property.jsx";

const LocationsWrapped = withActiveItem(Locations);

class App extends PureComponent {
  _renderApp() {
    const {
      activeOffer,
      currentCity,
      currentSort,
      locations,
      handleLocationClick,
      handleHeaderOfferClick,
      handleSortChange,
      onCardHover,
      focusOffer,
      currentCityOffers,
      comments,
      offersNearby,
      onCommentSubmit
    } = this.props;

    const isLoading = currentCityOffers.length === 0;

    if (activeOffer === undefined && !isLoading) {
      return (
        <Page
          className={
            `page--gray page--main`
          }
        >
          <Main isEmpty={false}>
            <React.Fragment>
              <LocationsWrapped
                locations={locations}
                handleLocationClick={handleLocationClick}
                currentCity={currentCity}
              />
              <Cities
                currentCityOffers={currentCityOffers}
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
    } else if (activeOffer !== undefined) {
      return (
        <Page>
          <Property
            activeOffer={activeOffer}
            currentCityOffers={currentCityOffers}
            currentSort={currentSort}
            onCardHover={onCardHover}
            focusOffer={focusOffer}
            handleHeaderOfferClick={handleHeaderOfferClick}
            comments={comments}
            offersNearby={offersNearby}
            onCommentSubmit={onCommentSubmit}
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
        <Main isEmpty={true}>
          <LocationsWrapped
            locations={locations}
            handleLocationClick={handleLocationClick}
            currentCity={currentCity}
          />
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
  handleLocationClick: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired,
  focusOffer: offerPropTypes,
  handleSortChange: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  comments: PropTypes.arrayOf(
      commentsPropTypes
  ),
  offersNearby: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  onCommentSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state),
  currentCity: getCurrentCity(state),
  currentSort: getCurrentSort(state),
  focusOffer: getFocusOffer(state),
  currentCityOffers: getOffersCurrentCity(state),
  locations: getLocations(state),
  comments: getComments(state),
  offersNearby: getOffersNearby(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleLocationClick(location) {
    dispatch(ActionCity.setCurrentCity(location));
  },
  handleHeaderOfferClick(offer) {
    dispatch(ActionOffer.setActiveOffer(offer));
    dispatch(DataOperation.loadComments());
    dispatch(DataOperation.loadOffersNearby());
  },
  onCardHover(offer) {
    dispatch(ActionOffer.setFocusOffer(offer));
  },
  handleSortChange(sort) {
    dispatch(ActionSort.setCurrentSort(sort));
  },
  onCommentSubmit(comment) {
    dispatch(DataOperation.uploadComments(comment));
  },
});

export {
  App
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
