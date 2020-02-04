import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  countPlaces: 312,
};

ReactDOM.render(
    <App countPlaces = {Settings.countPlaces}/>,
    document.querySelector(`#root`)
);
