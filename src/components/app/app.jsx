import React, {
  PureComponent
} from "react";
import {
  connect
} from "react-redux";
import {
  BrowserRouter,
  Switch,
} from "react-router-dom";
import {
  arrayOf,
  func,
  number,
  string,
} from "prop-types";
import {
  ActionCreator as ActionOffer
} from '../../reducer/offer/offer.js';
import {
  Operation as UserOperation,
  AuthorizationStatus,
} from '../../reducer/user/user.js';
import {
  ActionCreator as ResetResponseStatus
} from '../../reducer/response/response.js';
import {
  getResponseStatusCode
} from '../../reducer/response/selectors.js';
import {
  getCurrentCity
} from '../../reducer/city/selectors.js';
import {
  getLocations,
  getOffersCurrentCity,
} from '../../reducer/data/selectors.js';
import {
  getAuthorizationStatus,
} from '../../reducer/user/selectors.js';
import {
  getFocusOffer
} from '../../reducer/offer/selectors.js';
import {
  getCurrentSort
} from '../../reducer/sort/selectors.js';
import {
  offerPropTypes,
} from "../../types.js";
import {
  AppRoute,
} from '../../consts.js';
import withErrorMessage from '../../hocs/with-error-message/with-error-message.js';
import Favorites from '../favorites/favorites.jsx';
import Login from '../login/login.jsx';
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import RouteWithPage from '../route-with-page/route-with-page.jsx';
import RouteForFavorites from '../route-for-favorites/route-for-favorites.jsx';

const FavoritesWrapped = withErrorMessage(Favorites);
const LoginWrapped = withErrorMessage(Login);
const MainWrapped = withErrorMessage(Main);
const PropertyWrapped = withErrorMessage(Property);

class App extends PureComponent {
  render() {
    const {
      authStatus,
      currentCity,
      currentSort,
      currentCityOffers,
      focusOffer,
      locations,
      onCardHover,
      onCardLeave,
      onResetError,
      responseStatus,
      signIn,
    } = this.props;

    const isLoading = currentCityOffers.length === 0;
    const isAuth = authStatus === AuthorizationStatus.AUTH;

    if (isLoading) {
      return ``;
    }

    return (
      <BrowserRouter>
        <Switch>
          <RouteWithPage
            exact
            path={AppRoute.ROOT}
            component={
              <MainWrapped
                currentCity={currentCity}
                currentCityOffers={currentCityOffers}
                currentSort={currentSort}
                focusOffer={focusOffer}
                isEmpty={false}
                locations={locations}
                onCardHover={onCardHover}
                onCardLeave={onCardLeave}
                onResetError={onResetError}
                responseStatus={responseStatus}
              />
            }
          />
          <RouteWithPage
            exact
            path={AppRoute.LOGIN}
            component={
              <LoginWrapped
                currentCity={currentCity}
                isAuth={isAuth}
                onResetError={onResetError}
                responseStatus={responseStatus}
                signIn={signIn}
              />
            }
          />
          <RouteWithPage
            exact
            path={AppRoute.OFFER}
            component={
              <PropertyWrapped
                currentSort={currentSort}
                focusOffer={focusOffer}
                onCardHover={onCardHover}
                onCardLeave={onCardLeave}
                onResetError={onResetError}
                responseStatus={responseStatus}
              />
            }
          />
          <RouteForFavorites
            exact
            path={AppRoute.FAVORITE}
            render={() => (
              <FavoritesWrapped
                onCardHover={onCardHover}
                onCardLeave={onCardLeave}
                onResetError={onResetError}
                responseStatus={responseStatus}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authStatus: string.isRequired,
  currentCityOffers: arrayOf(
      offerPropTypes
  ).isRequired,
  currentCity: string.isRequired,
  currentSort: string.isRequired,
  focusOffer: offerPropTypes,
  locations: arrayOf(
      string
  ).isRequired,
  onCardHover: func.isRequired,
  onCardLeave: func.isRequired,
  onResetError: func.isRequired,
  responseStatus: number,
  signIn: func.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
  focusOffer: getFocusOffer(state),
  currentCity: getCurrentCity(state),
  currentSort: getCurrentSort(state),
  currentCityOffers: getOffersCurrentCity(state),
  locations: getLocations(state),
  responseStatus: getResponseStatusCode(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCardHover(offer) {
    dispatch(ActionOffer.setFocusOffer(offer));
  },
  onCardLeave() {
    dispatch(ActionOffer.resetFocusOffer());
  },
  onResetError() {
    dispatch(ResetResponseStatus.resetResponseStatusCode());
  },
  signIn(authData) {
    dispatch(UserOperation.signIn(authData));
  }
});

export {
  App
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
