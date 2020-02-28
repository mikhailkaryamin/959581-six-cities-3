import React from "react";
import Header from "../header/header.jsx";
import Locations from "../locations/locations.jsx";
import Cities from "../cities/cities.jsx";

const Main = () => {
  return (
    <div className="page page--gray page--main">
      {<Header />}
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          {<Locations />}
        </div>
        {<Cities />}
      </main>
    </div>
  );
};

export default Main;
