import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import mockData from "./mockData.js";

ReactDOM.render(
    <App
      countPlaces = {mockData.countPlaces}
      listOffers = {mockData.listOffers}
    />,
    document.querySelector(`#root`)
);
