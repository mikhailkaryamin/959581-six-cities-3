import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";

const activeCard = {
  id: 123,
  src: [
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`,
    `img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
  ],
  price: 120,
  rating: 4,
  name: `Beautiful &amp; luxurious apartment at great location`,
  description: `An independent House, strategically located between Rembrand Square and National Opera,`
  + ` but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  type: `Apartment`,
  mark: `Premium`
};

it(`Render property correctly`, () => {
  const tree = renderer
    .create(<Property
      activeCard={
        activeCard
      }
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
