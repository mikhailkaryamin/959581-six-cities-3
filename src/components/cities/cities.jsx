import React from "react";
import Places from "../places/places.jsx";
import Map from "../map/map.jsx";
import {
  ModificatorClass
} from "../../consts.js";

const Cities = () => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <Places
          modificatorClass={
            ModificatorClass.CITIES_PLACES
          }
        />
        <div className="cities__right-section">
          <Map
            modificatorClass={
              ModificatorClass.CITIES_MAP
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Cities;
