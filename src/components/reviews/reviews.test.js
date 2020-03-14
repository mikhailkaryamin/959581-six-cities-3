import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews.jsx";

const comments = [
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
    date: `April 2010`
  }
];

test(`Render reviews`, () => {
  const tree = renderer
    .create(
        <Reviews
          comments={comments}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
