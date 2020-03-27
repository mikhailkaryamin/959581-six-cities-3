import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  mount
} from 'enzyme';
import {
  ONE_COMMENT,
} from '../../mocks/constsMockTest';
import ReviewsForm from './reviews-form';

configure({
  adapter: new Adapter(),
});


const onChange = jest.fn();
const onSubmit = jest.fn();
const RATING = 3;
const COUNT_COMMENTS = 10;

test(`Render reviews form`, () => {
  const tree = mount(
      <ReviewsForm
        comment={ONE_COMMENT}
        countComments={COUNT_COMMENTS}
        onChange={onChange}
        onSubmit={onSubmit}
        rating={RATING}
      />
  ).html();

  expect(tree).toMatchSnapshot();
});
