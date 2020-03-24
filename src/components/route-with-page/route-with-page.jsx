import React, {
  PureComponent
} from 'react';
import {
  Route,
} from 'react-router-dom';
import {
  connect
} from 'react-redux';
import {
  arrayOf,
  bool,
  element,
  func,
  string,
} from 'prop-types';
import {
  getAuthorizationStatus,
  getUser,
} from '../../reducer/user/selectors.js';
import {
  getOffers,
} from '../../reducer/data/selectors.js';
import {
  AuthorizationStatus
} from '../../reducer/user/user.js';
import {
  AppRoute,
  ClassModificator
} from '../../consts.js';
import {
  userPropTypes,
  offerPropTypes,
} from "../../types.js";
import {
  ActionCreator as ActionOffer
} from '../../reducer/offer/offer.js';
import Page from '../page/page.jsx';


class RouteWithPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  _setInitialActiveOffer(currentOfferID) {
    const {
      initialOffers
    } = this.props;

    const initialActiveOffer = initialOffers.find((offer) => offer.id === currentOfferID);
    this.props.onSetActiveOffer(initialActiveOffer);
  }

  render() {
    const {
      authStatus,
      component,
      exact,
      path,
      user,
      initialOffers,
    } = this.props;

    const isLoadingInitialOffers = initialOffers.length === 0;

    if (isLoadingInitialOffers) {
      return ``;
    }

    const isAuth = authStatus === AuthorizationStatus.AUTH;
    let className;

    switch (path) {
      case AppRoute.ROOT:
        className = ClassModificator.PAGE_MAIN;
        break;
      case AppRoute.LOGIN:
        className = ClassModificator.PAGE_LOGIN;
        break;
      case AppRoute.OFFER:
        className = ClassModificator.PAGE_PROPERTY;
        break;
      default:
        className = ``;
    }

    return (
      <Route
        path={path}
        exact={exact}
        render={(renderProps) => {

          if (path === AppRoute.OFFER) {
            const currentOfferID = parseInt(renderProps.match.params.id, 10);
            this._setInitialActiveOffer(currentOfferID);
          }

          return (
            <Page
              className={className}
              isAuth={isAuth}
              user={user}
            >
              {component}
            </Page>
          );
        }}
      />
    );
  }
}

RouteWithPage.propTypes = {
  authStatus: string,
  component: element.isRequired,
  exact: bool.isRequired,
  initialOffers: arrayOf(
      offerPropTypes
  ).isRequired,
  onSetActiveOffer: func.isRequired,
  path: string.isRequired,
  user: userPropTypes,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
  initialOffers: getOffers(state),
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSetActiveOffer(offer) {
    dispatch(ActionOffer.setActiveOffer(offer));
  },
});

export {
  RouteWithPage
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteWithPage);
