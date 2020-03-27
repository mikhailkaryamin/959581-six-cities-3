import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  shallow
} from 'enzyme';
import {
  COMMENTS,
} from '../../mocks/constsMockTest';
import Reviews from './reviews';

configure({
  adapter: new Adapter(),
});

const IS_AUTH = true;
const RESPONSE_STATUS = null;
const COUNT_COMMENTS = 3;
const onCommentSubmit = jest.fn();

test(`Render reviews`, () => {
  const tree = shallow(
      <Reviews
        comments={COMMENTS}
        countComments={COUNT_COMMENTS}
        isAuth={IS_AUTH}
        onCommentSubmit={onCommentSubmit}
        responseStatus={RESPONSE_STATUS}
      />
  ).html();

  expect(tree).toMatchSnapshot();
});
