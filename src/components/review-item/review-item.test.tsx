import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {
  ONE_COMMENT,
} from '../../mocks/constsMockTest';
import ReviewItem from './review-item';

test(`Render correctly review`, () => {
  const tree = renderer
    .create(
        <ReviewItem
          comment={ONE_COMMENT}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

