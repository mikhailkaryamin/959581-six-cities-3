import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";

const handleHeaderOfferClick = () => {};

ReactDOM.render(
    <App
      offers = {
        offers
      }
      handleHeaderOfferClick={
        handleHeaderOfferClick
      }
    />,
    document.querySelector(`#root`)
);
