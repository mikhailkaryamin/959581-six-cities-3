import React from "react";
import renderer from "react-test-renderer";
import ReviewItem from "./review-item";

const comment = {
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
};

it(`Render correctly review`, () => {
  const tree = renderer
    .create(
        <ReviewItem
          comment={comment}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

