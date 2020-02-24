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
import {
  ActionCreator
} from "../../reducer.js";
import PropTypes from "prop-types";
import {
  offerPropTypes,
  reviewsPropTypes
} from "../../types.js";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";

class App extends PureComponent {
  _renderApp() {
    const {
      activeOffer
    } = this.props;

    if (activeOffer === undefined) {
      return (
        <Main />
      );
    } else {
      return (
        <Property
          activeOffer={
            activeOffer
          }
        />
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
  activeOffer: offerPropTypes,
  reviews: PropTypes.arrayOf(
      reviewsPropTypes
  ).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activeOffer: state.activeOffer,
});

const mapDispatchToProps = (dispatch) => ({
  handleHeaderOfferClick(offer) {
    dispatch(ActionCreator.setActiveOffer(offer));
  },
});

export {
  App
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
