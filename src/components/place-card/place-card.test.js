import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const handleHeaderOfferClick = () => {};
const handleActiveItem = () => {};
const onMouseEnter = () => {};
const onMouseLeave = () => {};
const offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    avatarUrl: `img/1.png`,
    id: 3,
    isPro: true,
    name: `Angelina`
  },
  id: 1,
  images: [`img/1.png`, `img/2.png`],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: `img/1.png`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
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
