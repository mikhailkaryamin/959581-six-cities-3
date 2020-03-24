import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {
  shallow
} from "enzyme";
import Reviews from "./reviews.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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
const isAuth = true;
const onCommentSubmit = () => {};
const countComments = 3;

test(`Render reviews`, () => {
  const tree = shallow(
      <Reviews
        comments={comments}
        countComments={countComments}
        isAuth={isAuth}
        onCommentSubmit={onCommentSubmit}
      />
  ).html();

  expect(tree).toMatchSnapshot();
});
