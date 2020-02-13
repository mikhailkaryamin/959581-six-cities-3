import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const offers = [
  {
    id: 123,
    src: `img/apartment-01.jpg`,
    price: 120,
    rating: 4,
    name: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`,
    mark: `Premium`
  },
  {
    id: 242,
    src: `img/room.jpg`,
    price: 80,
    rating: 4,
    name: `Wood and stone place`,
    type: `Private room`,
    mark: ``
  },
  {
    id: 232,
    src: `img/apartment-02.jpg`,
    price: 132,
    rating: 5,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    mark: `Premium`
  },
  {
    id: 522,
    src: `img/apartment-03.jpg`,
    price: 115,
    rating: 4,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    mark: ``
  }
];

const handleHeaderOfferClick = () => {};

it(`Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      offers={
        offers
      }
      handleHeaderOfferClick={
        handleHeaderOfferClick
      }
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
