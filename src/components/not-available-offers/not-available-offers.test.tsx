import React from "react";
import renderer from "react-test-renderer";
import NotAvailableOffers from './not-available-offers';

test(`Not available offers render correctly`, () => {
  const tree = renderer
    .create(
        <NotAvailableOffers />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
