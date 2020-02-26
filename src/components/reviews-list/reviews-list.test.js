import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";

const mockStore = configureStore([]);

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

it(`Render correctly reviews list`, () => {
  const store = mockStore({
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
    ]});
  const tree = renderer
    .create(
        <Provider
          store={
            store
          }
        >
          <ReviewsList
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
