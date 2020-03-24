import React from "react";
import renderer from "react-test-renderer";
import NotFoundPage from './not-found-page.jsx';

test(`Not found page render correctly`, () => {
  const tree = renderer
    .create(
        <NotFoundPage />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
