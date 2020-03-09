import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const focusOffer = {
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
  mark: true,
  insideItems: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ],
  coordinate: [52.3909553943508, 4.85309666406198],
  city: {
    name: `Paris`
  }
};

const offersCurrentCity = [
  {
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
    mark: true,
    insideItems: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    coordinate: [52.3909553943508, 4.85309666406198],
    city: {
      name: `Paris`
    }
  },
  {
    id: 242,
    src: [
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-01.jpg`
    ],
    price: 80,
    rating: 4,
    name: `Wood and stone place`,
    description: `An independent House, strategically located between Rembrand Square and National Opera,`
    + ` but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Private room`,
    mark: true,
    insideItems: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    coordinate: [52.3909553943508, 4.85309666406198],
    city: {
      name: `Paris`
    }
  },
  {
    id: 232,
    src: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    price: 132,
    rating: 5,
    name: `Canal View Prinsengracht`,
    description: `An independent House, strategically located between Rembrand Square and National Opera,`
    + ` but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Room`,
    mark: true,
    insideItems: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    coordinate: [52.3909553943508, 4.85309666406198],
    city: {
      name: `Paris`
    }
  },
  {
    id: 522,
    src: [
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
    ],
    price: 115,
    rating: 4,
    name: `Nice, cozy, warm big bed apartment`,
    description: `An independent House, strategically located between Rembrand Square and National Opera,`
    + ` but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Hotel`,
    mark: true,
    insideItems: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    coordinate: [52.3909553943508, 4.85309666406198],
    city: {
      name: `Paris`
    }
  }
];

it(`Render map correctly`, () => {
  const tree = renderer
    .create(
        <Map
          offersCurrentCity={offersCurrentCity}
          focusOffer={focusOffer}
        />, {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
