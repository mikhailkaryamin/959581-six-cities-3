import React, {
  PureComponent
} from 'react';
import {
  Route,
} from 'react-router-dom';
import {
  connect
} from 'react-redux';
import PropTypes from 'prop-types';
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
      component,
      path,
      exact,
      authStatus,
      user,
    } = this.props;

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
              user={user}
              isAuth={isAuth}
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
  component: PropTypes.element.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  authStatus: PropTypes.string,
  user: userPropTypes,
  onSetActiveOffer: PropTypes.func.isRequired,
  initialOffers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
};

const mapStateToProps = (state) => ({
  initialOffers: getOffers(state),
  authStatus: getAuthorizationStatus(state),
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
