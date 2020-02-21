import React,
{
  PureComponent
} from "react";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import PropTypes from "prop-types";
import {
  offerPropTypes,
  reviewsPropTypes
} from "../../types.js";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._setActiveCard = this._setActiveCard.bind(this);
  }

  _setActiveCard(offer) {
    this.setState({
      activeCard: offer
    });
  }

  _renderApp() {
    const {
      offers,
      reviews
    } = this.props;

    const {
      activeCard
    } = this.state;

    if (activeCard === null) {
      return (
        <Main
          offers = {
            offers
          }
          handleHeaderOfferClick={
            this._setActiveCard
          }
        />
      );
    } else {
      return (
        <Property
          activeCard={
            this.state.activeCard
          }
          reviews = {
            reviews
          }
          offers = {
            offers
          }
          handleHeaderOfferClick={
            this._setActiveCard
          }
        />
      );
    }
  }

  render() {
    const {
      offers,
      reviews
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {
              this._renderApp()
            }
          </Route>
          <Route exact path="/dev-offer">
            <Property
              activeCard={
                offers[0]
              }
              reviews = {
                reviews
              }
              offers = {
                offers
              }
              handleHeaderOfferClick={
                this._setActiveCard
              }
            />
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
  reviews: PropTypes.arrayOf(
      reviewsPropTypes
  ).isRequired,
};


export default App;
