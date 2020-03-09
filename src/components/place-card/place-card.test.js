import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const handleHeaderOfferClick = () => {};
const handleActiveItem = () => {};
const onMouseEnter = () => {};
const onMouseLeave = () => {};
const offer = {
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

it(`Render place card`, () => {
  const tree = renderer
    .create(
        <PlaceCard
          handleHeaderOfferClick={handleHeaderOfferClick}
          handleActiveItem={handleActiveItem}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          offer={offer}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
