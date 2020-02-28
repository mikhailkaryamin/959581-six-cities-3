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
  offerPropTypes,
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
        <Property />
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
};

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
});

export {
  App
};
export default connect(mapStateToProps)(App);
