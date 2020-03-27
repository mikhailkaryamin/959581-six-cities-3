import * as React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import {
  connect
} from 'react-redux';
import {
  getAuthorizationStatus,
  getUser,
} from '../../reducer/user/selectors';
import {
  getOffers,
  getLoadStatus,
} from '../../reducer/data/selectors';
import {
  getActiveOffer
} from '../../reducer/offer/selectors';
import {
  AuthorizationStatus
} from '../../reducer/user/user';
import {
  AppRoute,
  ClassModificator
} from '../../consts';
import {
  User,
  Offer,
} from '../../types';
import {
  ActionCreator as ActionOffer
} from '../../reducer/offer/offer';
import Page from '../page/page';

interface Props {
  initialOffers: Offer[];
  activeOffer: Offer;
  authStatus: number | null;
  component: React.ReactNode;
  exact: boolean;
  loadStatus: boolean;
  path: string;
  user: User;
  onSetActiveOffer: (Offer) => void;
}

class RouteWithPage extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  _setInitialActiveOffer(currentRequestOfferId) {
    const {
      initialOffers
    } = this.props;

    const initialActiveOffer = initialOffers.find((offer) => offer.id === currentRequestOfferId);
    this.props.onSetActiveOffer(initialActiveOffer);
  }

  _checkCorrectOfferId(currentRequestOfferId) {
    const {
      initialOffers
    } = this.props;

    return (initialOffers.length <= currentRequestOfferId || isNaN(currentRequestOfferId));
  }

  render() {
    const {
      activeOffer,
      authStatus,
      component,
      exact,
      loadStatus,
      path,
      user,
    } = this.props;

    const isLoading = loadStatus !== true;

    if (isLoading) {
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
        className = ClassModificator.PAGE_MAIN;
    }

    return (
      <Route
        path={path}
        exact={exact}
        render={(renderProps) => {
          if (path === AppRoute.OFFER) {
            const currentRequestOfferId = parseInt(renderProps.match.params.id, 10);

            if (this._checkCorrectOfferId(currentRequestOfferId)) {
              return (
                <Redirect to={{
                  pathname: AppRoute.NOT_FOUND,
                  state: {
                    from: renderProps.location
                  }
                }}/>
              );
            }

            if (activeOffer === null || activeOffer.id !== currentRequestOfferId) {
              this._setInitialActiveOffer(currentRequestOfferId);
            }
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

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
  activeOffer: getActiveOffer(state),
  initialOffers: getOffers(state),
  loadStatus: getLoadStatus(state),
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
