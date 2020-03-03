import React, {
  PureComponent,
  createRef
} from "react";
import {
  connect
} from "react-redux";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {
  CoordinatesCity
} from "../../mocks/constsMock.js";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._map = undefined;
  }

  componentDidMount() {
    const mapRef = this._mapRef.current;
    if (mapRef) {
      const {
        AMSTERDAM
      } = CoordinatesCity;
      const zoom = 12;
      const {
        coordinatesWithoutActive,
        focusCoordinate
      } = this.props;

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

      coordinatesWithoutActive.map((markerCoordinate) =>
        leaflet
        .marker(markerCoordinate, {icon: iconDefault})
        .addTo(this._map)
      );

      if (focusCoordinate !== undefined) {
        const iconActive = leaflet.icon({
          iconUrl: `img/pin-active.svg`,
          iconSize: [30, 30]
        });

        leaflet
          .marker(focusCoordinate, {icon: iconActive})
          .addTo(this._map);
      }
    }
  }

  componentDidUpdate() {
    const {
      coordinatesWithoutActive,
      focusCoordinate
    } = this.props;
    const iconDefault = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    coordinatesWithoutActive.map((markerCoordinate) =>
      leaflet
        .marker(markerCoordinate, {icon: iconDefault})
        .addTo(this._map)
    );

    if (focusCoordinate) {
      const iconActive = leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [30, 30]
      });

      leaflet
        .marker(focusCoordinate, {icon: iconActive})
        .addTo(this._map);
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
  coordinatesWithoutActive: PropTypes.arrayOf(
      PropTypes.arrayOf(
          PropTypes.number.isRequired
      )
  ),
  focusCoordinate: PropTypes.arrayOf(
      PropTypes.number.isRequired
  ),
};

Map.defaultProps = {
  modificatorClass: ``,
};

const mapStateToProps = (state) => ({
  coordinatesWithoutActive: state.coordinatesWithoutActive,
  focusCoordinate: state.focusCoordinate,
});

export {
  Map
};
export default connect(mapStateToProps)(Map);
