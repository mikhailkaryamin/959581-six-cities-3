import React,
{
  PureComponent
} from "react";
import {
  connect
} from "react-redux";
import PropTypes from "prop-types";
import PlacesCardList from "../place-card-list/place-card-list.jsx";
import PlacesSort from "../places-sort/places-sort.jsx";
import {
  ModificatorClass
} from "../../consts.js";

class Places extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      availableOffers,
      currentCity,
      modificatorClass
    } = this.props;

    return (
      <section className={`places ${modificatorClass}`}>
        {modificatorClass === ModificatorClass.CITIES_PLACES &&
          <React.Fragment>
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {
                availableOffers
              } places to stay in {
                currentCity
              }
            </b>
            {<PlacesSort />}
            {<PlacesCardList
              modificatorClass={
                ModificatorClass.CITIES_PLACES_LIST
              }
            />}
          </React.Fragment>
        }

        {modificatorClass === ModificatorClass.NEAR_PLACES &&
          <React.Fragment>
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            {<PlacesCardList
              modificatorClass={
                ModificatorClass.NEAR_PLACES_LIST
              }
            />}
          </React.Fragment>
        }
      </section>
    );
  }
}

Places.propTypes = {
  availableOffers: PropTypes.number.isRequired,
  modificatorClass: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  availableOffers: state.availableOffers,
  currentCity: state.currentCity,
});

export {
  Places
};

export default connect(mapStateToProps)(Places);
