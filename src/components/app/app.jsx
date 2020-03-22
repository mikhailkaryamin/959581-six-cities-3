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
import PropTypes from "prop-types";
import {
  ActionCreator as ActionOffer
} from '../../reducer/offer/offer.js';
import {
  Operation as UserOperation,
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
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import Login from '../login/login.jsx';
import Favorites from '../favorites/favorites.jsx';
import RouteWithPage from '../route-with-page/route-with-page.jsx';
import RouteForFavorites from '../route-for-favorites/route-for-favorites.jsx';

const MainWrapped = withErrorMessage(Main);
const PropertyWrapped = withErrorMessage(Property);
const LoginWrapped = withErrorMessage(Login);
const FavoritesWrapped = withErrorMessage(Favorites);

class App extends PureComponent {
  render() {
    const {
      currentCity,
      currentSort,
      locations,
      onCardHover,
      onCardLeave,
      focusOffer,
      currentCityOffers,
      signIn,
      onResetError,
      responseStatus,
    } = this.props;

    const isLoading = currentCityOffers.length === 0;

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
                isEmpty={false}
                locations={locations}
                currentCity={currentCity}
                currentCityOffers={currentCityOffers}
                currentSort={currentSort}
                onCardHover={onCardHover}
                onCardLeave={onCardLeave}
                focusOffer={focusOffer}
                responseStatus={responseStatus}
                onResetError={onResetError}
              />
            }
          />
          <RouteWithPage
            exact
            path={AppRoute.LOGIN}
            component={
              <LoginWrapped
                currentCity={currentCity}
                signIn={signIn}
                onResetError={onResetError}
                responseStatus={responseStatus}
              />
            }
          />
          <RouteWithPage
            exact
            path={AppRoute.OFFER}
            component={
              <PropertyWrapped
                currentSort={currentSort}
                onCardHover={onCardHover}
                onCardLeave={onCardLeave}
                focusOffer={focusOffer}
                responseStatus={responseStatus}
                onResetError={onResetError}
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
                responseStatus={responseStatus}
                onResetError={onResetError}
              />
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
  currentCity: PropTypes.string.isRequired,
  currentSort: PropTypes.string.isRequired,
  focusOffer: offerPropTypes,
  onCardHover: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  onResetError: PropTypes.func.isRequired,
  responseStatus: PropTypes.number,
};

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  currentSort: getCurrentSort(state),
  focusOffer: getFocusOffer(state),
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
