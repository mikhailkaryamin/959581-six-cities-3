import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {
  COMMENTS,
} from '../../mocks/constsMockTest';
import ReviewsList from './reviews-list';

test(`Render correctly reviews list`, () => {
  const tree = renderer
    .create(
        <ReviewsList
          comments={COMMENTS}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
