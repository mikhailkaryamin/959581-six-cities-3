import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const offer = {
  id: 123,
  src: `img/apartment-01.jpg`,
  price: 120,
  rating: 4,
  name: `Beautiful &amp; luxurious apartment at great location`,
  type: `Apartment`,
  mark: `Premium`
};
const handleHeaderOfferClick = () => {};
const onMouseEnter = () => {};
const onMouseLeave = () => {};

it(`Render place card`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer={
        offer
      }
      handleHeaderOfferClick={
        handleHeaderOfferClick
      }
      onMouseEnter={
        onMouseEnter
      }
      onMouseLeave={
        onMouseLeave
      }
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
