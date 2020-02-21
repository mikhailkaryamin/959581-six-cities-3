import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const review = {
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
};

it(`Render correctly review`, () => {
  const tree = renderer
    .create(
        <Review
          review={review}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

