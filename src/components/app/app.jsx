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
  Operation as DataOperation
} from '../../reducer/data/data.js';
import {
  Operation as UserOperation,
  AuthorizationStatus
} from '../../reducer/user/user.js';
import {
  ActionCreator as ResetResponseStatus
} from '../../reducer/response/response.js';
import {
  getResponseStatusCode
} from '../../reducer/response/selectors.js';
import {
  getAuthorizationStatus,
  getUser,
} from '../../reducer/user/selectors.js';
import {
  getCurrentCity
} from '../../reducer/city/selectors.js';
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
  offerPropTypes,
  userPropTypes
} from "../../types.js";
import {
  AppRoute
} from '../../consts.js';
import withErrorMessage from '../../hocs/with-error-message/with-error-message.js';
import Main from "../main/main.jsx";
import Page from "../page/page.jsx";
import Property from "../property/property.jsx";
import Login from '../login/login.jsx';
import Favorites from '../favorites/favorites.jsx';

const MainWrapped = withErrorMessage(Main);
const PropertyWrapped = withErrorMessage(Property);
const LoginWrapped = withErrorMessage(Login);
const FavoritesWrapped = withErrorMessage(Favorites);

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
      user,
      authStatus,
      signInUser,
    } = this.props;

    const isLoading = currentCityOffers.length === 0;
    const isAuth = authStatus === AuthorizationStatus.AUTH;

    if (isLoading) {
      return ``;
    }

    if (activeOffer === null) {
      return (
        <Page
          className={
            `page--gray page--main`
          }
          user={user}
          isAuth={isAuth}
        >
          <Main
            isEmpty={false}
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
    const {
      activeOffer,
      currentCity,
      currentSort,
      locations,
      handleHeaderOfferClick,
      onCardHover,
      focusOffer,
      currentCityOffers,
      user,
      authStatus,
      signInUser,
      onResetError,
      responseStatus,
    } = this.props;

    const isLoading = currentCityOffers.length === 0;
    const isAuth = authStatus === AuthorizationStatus.AUTH;

    if (isLoading) {
      return ``;
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={AppRoute.ROOT}
            render={() => (
              <Page
                className={
                  `page--gray page--main`
                }
                user={user}
                isAuth={isAuth}
              >
                <MainWrapped
                  isEmpty={false}
                  locations={locations}
                  currentCity={currentCity}
                  currentCityOffers={currentCityOffers}
                  currentSort={currentSort}
                  handleHeaderOfferClick={handleHeaderOfferClick}
                  onCardHover={onCardHover}
                  focusOffer={focusOffer}
                  responseStatus={responseStatus}
                  onResetError={onResetError}
                />
              </Page>
            )}
          />
          <Route
            exact
            path={AppRoute.LOGIN}
            render={() => (
              <Page
                className={
                  `page--gray page--login`
                }
                user={user}
                isAuth={isAuth}
              >
                <LoginWrapped
                  isAuth={isAuth}
                  user={user}
                  currentCity={currentCity}
                  onResetError={onResetError}
                  signInUser={signInUser}
                  responseStatus={responseStatus}
                />
              </Page>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentCityOffers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  locations: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  user: userPropTypes,
  authStatus: PropTypes.string.isRequired,
  activeOffer: offerPropTypes,
  currentCity: PropTypes.string.isRequired,
  currentSort: PropTypes.string.isRequired,
  focusOffer: offerPropTypes,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired,
  onResetError: PropTypes.func.isRequired,
  responseStatus: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state),
  currentCity: getCurrentCity(state),
  currentSort: getCurrentSort(state),
  focusOffer: getFocusOffer(state),
  currentCityOffers: getOffersCurrentCity(state),
  locations: getLocations(state),
  user: getUser(state),
  authStatus: getAuthorizationStatus(state),
  responseStatus: getResponseStatusCode(state),
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
  onResetError() {
    dispatch(ResetResponseStatus.resetResponseStatusCode());
  },
  signInUser(authData) {
    dispatch(UserOperation.signInUser(authData));
  }
});

export {
  App
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
