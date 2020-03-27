import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  shallow
} from 'enzyme';
import Reviews from './reviews';

configure({
  adapter: new Adapter(),
});

const comments = [
  {
    id: 1,
    user: {
      id: 1,
      isPro: true,
      name: `Mi`,
      avatarUrl: `img/avatar-max.jpg`
    },
    rating: 2,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Curabitur ornare nunc a blandit ultricies.
    Integer a urna in nunc congue efficitur.`,
    date: `April 2010`
  }
];
const isAuth = true;
const onCommentSubmit = jest.fn();
const responseStatus = null;
const countComments = 3;

test(`Render reviews`, () => {
  const tree = shallow(
      <Reviews
        comments={comments}
        countComments={countComments}
        isAuth={isAuth}
        onCommentSubmit={onCommentSubmit}
        responseStatus={responseStatus}
      />
  ).html();

  expect(tree).toMatchSnapshot();
});
