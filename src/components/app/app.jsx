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
      offers
    } = this.props;

    const {
      activeCard
    } = this.state;

    if (activeCard === null) {
      return (
        <Main
          offers = {offers}
          handleHeaderOfferClick={this._setActiveCard}
        />
      );
    } else {
      return (
        <Property
          activeCard={
            this.state.activeCard
          }
        />
      );
    }
  }

  render() {
    const {
      offers
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
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        mark: PropTypes.string,
      })
  ).isRequired,
};


export default App;
