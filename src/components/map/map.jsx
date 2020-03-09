import React, {
  PureComponent,
  createRef
} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {
  offerPropTypes,
} from "../../types.js";
import {
  CoordinatesCity
} from "../../mocks/constsMock.js";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._map = undefined;
    this._markers = {};
  }

  _getCoordinates(offersCurrentCity) {
    return offersCurrentCity
      .map((offer) => offer.coordinate);
  }

  _getCoordinatesWithID(offersCurrentCity) {
    return offersCurrentCity
      .map((offer) => ({
        coordinate: offer.coordinate,
        id: offer.id,
      }));
  }

  componentDidMount() {
    const mapRef = this._mapRef.current;
    if (mapRef) {
      const {
        AMSTERDAM
      } = CoordinatesCity;
      const zoom = 12;
      const {
        offersCurrentCity
      } = this.props;

      const COORDINATES = this._getCoordinates(offersCurrentCity);

      const iconDefault = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      this._map = leaflet.map(mapRef, {
        center: AMSTERDAM,
        zoom,
        zoomControl: false,
        marker: true
      });

      this._map.setView(AMSTERDAM, zoom);

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
      offersCurrentCity,
    } = this.props;

    const iconDefault = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    if (this._markers !== undefined) {
      this._markers.forEach((marker) => this._map.removeLayer(marker));
    }

    if (focusOffer !== undefined) {
      const COORDINATES_WITH_ID = this._getCoordinatesWithID(offersCurrentCity);
      const FOCUS_OFFER_ID = focusOffer.id;

      const iconActive = leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [30, 30]
      });

      this._markers = COORDINATES_WITH_ID.map((offer) => {
        if (offer.id !== FOCUS_OFFER_ID) {
          return leaflet
          .marker(offer.coordinate, {icon: iconDefault})
          .addTo(this._map);
        } else {
          return leaflet
          .marker(offer.coordinate, {icon: iconActive})
          .addTo(this._map);
        }
      });

    } else if (focusOffer === undefined) {
      const COORDINATES = this._getCoordinates(offersCurrentCity);
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
      modificatorClass
    } = this.props;

    return (
      <section ref={this._mapRef} className={`map ${modificatorClass}`}>
      </section>
    );
  }
}

Map.propTypes = {
  modificatorClass: PropTypes.string,
  offersCurrentCity: PropTypes.arrayOf(
      offerPropTypes
  ).isRequired,
  focusOffer: offerPropTypes,
};

Map.defaultProps = {
  modificatorClass: ``,
};

export default Map;
