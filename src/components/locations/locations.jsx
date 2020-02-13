import React, {
  PureComponent
} from "react";

class Locations extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const locations = [
      `Paris`,
      `Cologne`,
      `Brussels`,
      `Amsterdam`,
      `Hamburg`,
      `Dusseldorf`
    ];
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((location) =>
            <li className="locations__item" key={location} >
              <a className="locations__item-link tabs__item" href="#">
                <span>
                  {location}
                </span>
              </a>
            </li>
          )}
        </ul>
      </section>
    );
  }
}

export default Locations;
