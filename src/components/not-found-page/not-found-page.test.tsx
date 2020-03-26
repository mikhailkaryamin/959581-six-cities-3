import * as React from 'react';
import * as renderer from 'react-test-renderer';
import NotFoundPage from './not-found-page';

test(`Not found page render correctly`, () => {
  const tree = renderer
    .create(
        <NotFoundPage />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
