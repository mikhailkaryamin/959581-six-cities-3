import React,
{
  PureComponent
} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      offers,
      handleHeaderOfferClick
    } = this.props;

    return (
      <Main
        offers = {offers}
        handleHeaderOfferClick={handleHeaderOfferClick}
      />
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        mark: PropTypes.string,
      })
  ).isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
};


export default App;
