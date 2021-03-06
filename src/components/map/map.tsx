import * as React from 'react';
import * as leaflet from "leaflet";
import {
  Coordinate,
  Offer,
} from "../../types";
import {
  ClassModificator
} from '../../consts';

interface Props {
  currentCityOffers: Offer[];
  classModificator?: string;
  currentOfferCoordinate?: Coordinate;
  focusOffer: Offer;
}

class Map extends React.PureComponent<Props, {}> {
  private _map;
  private _markers;
  private _iconActive;
  private _iconDefault;
  private _iconCurrentOffer;
  private readonly _mapRef: React.RefObject<HTMLElement>;

  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
    this._map = undefined;
    this._markers = {};
    this._iconActive = leaflet.icon({
      iconUrl: `https://mikhailkaryamin.github.io/959581-six-cities-3/img/pin-active.svg`,
      iconSize: [30, 35]
    });
    this._iconDefault = leaflet.icon({
      iconUrl: `https://mikhailkaryamin.github.io/959581-six-cities-3/img/pin.svg`,
      iconSize: [30, 35]
    });
    this._iconCurrentOffer = leaflet.icon({
      iconUrl: `https://mikhailkaryamin.github.io/959581-six-cities-3/img/pin-current-offer.svg`,
      iconSize: [37, 42]
    });
  }

  componentDidMount() {
    const mapRef = this._mapRef.current;
    if (mapRef) {
      const {
        currentCityOffers,
        classModificator,
        currentOfferCoordinate,
      } = this.props;

      const COORDINATES = this._getCoordinates(currentCityOffers);

      this._initiatesMap();

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap</a> contributors &copy;
          <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this._map);

      this._markers = COORDINATES.map((markerCoordinate) =>
        leaflet
        .marker(markerCoordinate, {icon: this._iconDefault})
        .addTo(this._map)
      );

      if (classModificator === ClassModificator.PROPERTY_MAP) {
        this._markers.push(leaflet
        .marker(currentOfferCoordinate, {icon: this._iconCurrentOffer})
        .addTo(this._map));
      }
    }
  }

  componentDidUpdate() {
    const {
      focusOffer,
      currentCityOffers,
      classModificator,
      currentOfferCoordinate,
    } = this.props;

    const CURRENT_CITY = this._getCurrentCityCoordinate(currentCityOffers);

    this._map.setView(CURRENT_CITY, CURRENT_CITY.zoom);

    this._resetMarkers();

    if (focusOffer !== null) {
      const COORDINATES_WITH_ID = this._getCoordinatesWithID(currentCityOffers);
      const FOCUS_OFFER_ID = focusOffer.id;
      this._markers = COORDINATES_WITH_ID.map((markerCoordinate) => {
        if (markerCoordinate.id !== FOCUS_OFFER_ID) {
          return leaflet
            .marker(markerCoordinate, {icon: this._iconDefault})
            .addTo(this._map);
        } else {
          return leaflet
            .marker(markerCoordinate, {icon: this._iconActive})
            .addTo(this._map);
        }
      });

    } else if (focusOffer === null) {
      const COORDINATES = this._getCoordinates(currentCityOffers);
      this._markers = COORDINATES.map((coordinate) =>
        leaflet
          .marker(coordinate, {icon: this._iconDefault})
          .addTo(this._map)
      );
    }

    if (classModificator === ClassModificator.PROPERTY_MAP) {
      this._markers.push(leaflet
      .marker(currentOfferCoordinate, {icon: this._iconCurrentOffer})
      .addTo(this._map));
    }
  }

  componentWillUnmount() {
    this._map = null;
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

  _getCurrentCityCoordinate(currentCityOffers) {
    return ({
      lat: currentCityOffers[0].city.location.latitude,
      lng: currentCityOffers[0].city.location.longitude,
      zoom: currentCityOffers[0].city.location.zoom,
    });
  }

  _initiatesMap() {
    const {
      currentCityOffers,
    } = this.props;

    const CURRENT_CITY = this._getCurrentCityCoordinate(currentCityOffers);

    this._map = leaflet.map(this._mapRef.current, {
      center: CURRENT_CITY,
      zoom: CURRENT_CITY.zoom,
      zoomControl: false,
      marker: true
    });
  }

  _resetMarkers() {
    if (this._markers !== undefined) {
      this._markers.forEach((marker) => this._map.removeLayer(marker));
    }
  }

  render() {
    const {
      classModificator,
    } = this.props;

    return (
      <section ref={this._mapRef} className={`map ${classModificator}`}>
      </section>
    );
  }
}

export default Map;
