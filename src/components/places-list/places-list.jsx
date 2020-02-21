import React,
{
  PureComponent
} from "react";
import PropTypes from "prop-types";
import {
  offerPropTypes
} from "../../types.js";
import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._setActiveCard = this._setActiveCard.bind(this);
    this._removeActiveCard = this._removeActiveCard.bind(this);
  }

  _setActiveCard(offer) {
    this.setState({
      activeCard: offer
    });
  }

  _removeActiveCard() {
    this.setState({
      activeCard: null
    });
  }

  render() {
    const {
      offers,
      handleHeaderOfferClick,
      modificatorClass
    } = this.props;

    const places = offers.map((offer) =>
      <PlaceCard
        key={`${offer.id}`}
        offer={offer}
        handleHeaderOfferClick={handleHeaderOfferClick}
        onMouseEnter={this._setActiveCard}
        onMouseLeave={this._removeActiveCard}
      />);

    return (
      <div className={`places__list ${modificatorClass}`}>
        {
          places
        }
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  handleHeaderOfferClick: PropTypes.func.isRequired,
  modificatorClass: PropTypes.string,
};

PlacesList.defaultProps = {
  modificatorClass: ``
};

export default PlacesList;

