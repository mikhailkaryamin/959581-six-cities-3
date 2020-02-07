import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  countPlaces: 312,
  listOffers: [
    `Beautiful &amp; luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
  ]
};

ReactDOM.render(
    <App
      countPlaces = {Settings.countPlaces}
      listOffers = {Settings.listOffers}
    />,
    document.querySelector(`#root`)
);
