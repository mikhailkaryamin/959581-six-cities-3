import React, {
  PureComponent,
  createRef
} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {
  offerPropTypes,
} from "../../types.js";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._map = undefined;
    this._markers = {};
  }

  _getCoordinates(currentCityOffers) {
    return currentCityOffers
      .map((offer) => ({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      }));
  }

  _getCoordinatesWithID(currentCityOffers) {
    return currentCityOffers
      .map((offer) => ({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
        id: offer.id,
      }));
  }

  _getCurrentCityCoordinates(currentCityOffers) {
    return ({
      lat: currentCityOffers[0].city.location.latitude,
      lng: currentCityOffers[0].city.location.longitude,
      zoom: currentCityOffers[0].city.location.zoom,
    });
  }

  componentDidMount() {
    const mapRef = this._mapRef.current;
    if (mapRef) {
      const {
        currentCityOffers
      } = this.props;
      const COORDINATES = this._getCoordinates(currentCityOffers);
      const CURRENT_CITY = this._getCurrentCityCoordinates(currentCityOffers);

      const iconDefault = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      this._map = leaflet.map(mapRef, {
        center: CURRENT_CITY,
        zoom: CURRENT_CITY.zoom,
        zoomControl: false,
        marker: true
      });

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap</a> contributors &copy;
          <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this._map);

      this._markers = COORDINATES.map((markerCoordinate) =>
        leaflet
        .marker(markerCoordinate, {icon: iconDefault})
        .addTo(this._map)
      );
    }
  }

  componentDidUpdate() {
    const {
      focusOffer,
      currentCityOffers,
    } = this.props;

    const iconDefault = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const CURRENT_CITY = this._getCurrentCityCoordinates(currentCityOffers);
    this._map.setView(CURRENT_CITY, CURRENT_CITY.zoom);

    if (this._markers !== undefined) {
      this._markers.forEach((marker) => this._map.removeLayer(marker));
    }

    if (focusOffer !== undefined) {
      const COORDINATES_WITH_ID = this._getCoordinatesWithID(currentCityOffers);
      const FOCUS_OFFER_ID = focusOffer.id;

      const iconActive = leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [30, 30]
      });

      this._markers = COORDINATES_WITH_ID.map((markerCoordinate) => {
        if (markerCoordinate.id !== FOCUS_OFFER_ID) {
          return leaflet
          .marker(markerCoordinate, {icon: iconDefault})
          .addTo(this._map);
        } else {
          return leaflet
          .marker(markerCoordinate, {icon: iconActive})
          .addTo(this._map);
        }
      });

    } else if (focusOffer === undefined) {
      const COORDINATES = this._getCoordinates(currentCityOffers);
      this._markers = COORDINATES.map((coordinate) =>
        leaflet
          .marker(coordinate, {icon: iconDefault})
          .addTo(this._map)
      );
    }
  }

  componentWillUnmount() {
    this._map = null;
  }

  render() {
    const {
      modificatorClass,
    } = this.props;

    return (
      <section ref={this._mapRef} className={`map ${modificatorClass}`}>
      </section>
    );
  }
}

Map.propTypes = {
  modificatorClass: PropTypes.string,
  currentCityOffers: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  focusOffer: offerPropTypes,
};

Map.defaultProps = {
  modificatorClass: ``,
};

export default Map;
