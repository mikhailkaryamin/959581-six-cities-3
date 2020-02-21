import React, {
  PureComponent,
  createRef
} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {
  CoordinatesCity
} from "../../mocks/constsMock.js";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
  }

  componentDidMount() {
    const mapRef = this._mapRef.current;

    if (mapRef) {
      const {
        AMSTERDAM
      } = CoordinatesCity;
      const zoom = 12;
      const offerCoordinates = this.props.coordinates;

      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      const map = leaflet.map(mapRef, {
        center: AMSTERDAM,
        zoom,
        zoomControl: false,
        marker: true
      });

      map.setView(AMSTERDAM, zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap</a> contributors &copy;
          <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(map);

      offerCoordinates.map((markerCoordinate) =>
        leaflet
        .marker(markerCoordinate, {icon})
        .addTo(map)
      );

      if (this.props.activeCoordinates !== undefined) {
        const activeCoordinates = this.props.activeCoordinates;
        const iconActive = leaflet.icon({
          iconUrl: `img/pin-active.png`,
          iconSize: [30, 30]
        });

        leaflet
          .marker(activeCoordinates, {iconActive})
          .addTo(map);
      }
    }
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
  coordinates: PropTypes.arrayOf(
      PropTypes.arrayOf(
          PropTypes.number.isRequired
      )
  ),
  activeCoordinates: PropTypes.arrayOf(
      PropTypes.number.isRequired
  )
};

Map.defaultProps = {
  modificatorClass: ``,
};

export default Map;
