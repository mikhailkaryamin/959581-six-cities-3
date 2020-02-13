import React,
{
  PureComponent
} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class Places extends PureComponent {
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
      handleHeaderOfferClick
    } = this.props;

    const AVAILABLE = offers.length;

    const places = offers.map((offer) =>
      <PlaceCard
        key={`${offer.id}`}
        offer={offer}
        onHeadlineButtonClick={handleHeaderOfferClick}
        onMouseEnter={this._setActiveCard}
        onMouseLeave={this._removeActiveCard}
      />);

    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {
            AVAILABLE
          } places to stay in Amsterdam
        </b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {
            places
          }
        </div>
      </section>
    );
  }
}

Places.propTypes = {
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
  handleHeaderOfferClick: PropTypes.func.isRequired
};

export default Places;
