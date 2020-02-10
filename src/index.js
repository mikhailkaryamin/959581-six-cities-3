import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import MockData from "./mockData.js";

ReactDOM.render(
    <App
      available = {MockData.AVAILABLE}
      descriptions = {MockData.DESCRIPTIONS}
    />,
    document.querySelector(`#root`)
);
