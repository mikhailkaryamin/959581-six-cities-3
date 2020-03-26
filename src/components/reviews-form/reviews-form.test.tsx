import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {
  mount
} from 'enzyme';
import ReviewsForm from './reviews-form';

Enzyme.configure({
  adapter: new Adapter(),
});

const comment = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Curabitur ornare nunc a blandit ultricies.
  Integer a urna in nunc congue efficitur.`;
const onChange = jest.fn();
const onSubmit = jest.fn();
const rating = 3;
const countComments = 10;

test(`Render reviews form`, () => {
  const tree = mount(
      <ReviewsForm
        comment={comment}
        countComments={countComments}
        onChange={onChange}
        onSubmit={onSubmit}
        rating={rating}
      />
  ).html();

  expect(tree).toMatchSnapshot();
});
