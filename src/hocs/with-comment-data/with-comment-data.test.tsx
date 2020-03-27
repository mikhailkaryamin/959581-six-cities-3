import * as React from 'react';
import {
  configure,
  shallow
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withCommentData from './with-comment-data';

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const MockComponentWrapped = withCommentData(MockComponent);

const mockRating = {
  currentTarget: {value: 3, name: `rating`}
};
const mockReview = {
  currentTarget: {value: `Test text`, name: `review`}
};
const onCommentSubmit = jest.fn();

describe(`withCommentData HOC`, () => {
  test(`render correctly with initial state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          onCommentSubmit={onCommentSubmit}
          countComments={10}
        />
    );
    expect(wrapper.props().rating).toEqual(0);
    expect(wrapper.props().comment).toHaveLength(0);
  });

  test(`render correctly with user data`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          onCommentSubmit={onCommentSubmit}
          countComments={5}
        />
    );
    wrapper.props().onChange(mockRating);
    expect(wrapper.props().rating).toEqual(3);
    wrapper.props().onChange(mockReview);
    expect(wrapper.props().comment).toEqual(`Test text`);
  });
});
