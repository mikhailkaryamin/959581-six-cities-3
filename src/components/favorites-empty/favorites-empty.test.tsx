import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FavoritesEmpty from './favorites-empty';

test(`Should render FavoritesEmpty correctly`, () => {
  const tree = renderer.create(
      <FavoritesEmpty />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

