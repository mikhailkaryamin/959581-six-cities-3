import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";

const mockStore = configureStore([]);

const activeOffer = {
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
};

const offers = [
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
  }
];

const reviews = [
  {
    id: 1,
    user: {
      id: 1,
      isPro: true,
      name: `Mi`,
      avatarURL: `img/avatar-max.jpg`
    },
    rating: 2,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Curabitur ornare nunc a blandit ultricies.
    Integer a urna in nunc congue efficitur.`,
    date: new Date(2010, 10, 1)
  }
];

const handleHeaderOfferClick = () => {};

it(`Render property correctly`, () => {
  const store = mockStore({
    offers: [
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
      }
    ],
    reviews: [
      {
        id: 1,
        user: {
          id: 1,
          isPro: true,
          name: `Mi`,
          avatarURL: `img/avatar-max.jpg`
        },
        rating: 2,
        comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur ornare nunc a blandit ultricies.
        Integer a urna in nunc congue efficitur.`,
        date: new Date(2010, 10, 1)
      }
    ],
    numberReviews: 3,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Property
            activeOffer={
              activeOffer
            }
            handleHeaderOfferClick={
              handleHeaderOfferClick
            }
          />
        </Provider>
    )
  .toJSON();

  expect(tree).toMatchSnapshot();
});