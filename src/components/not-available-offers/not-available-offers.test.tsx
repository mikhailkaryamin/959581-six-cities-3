import * as React from 'react';
import * as renderer from 'react-test-renderer';
import NotAvailableOffers from './not-available-offers';

test(`Not available offers render correctly`, () => {
  const tree = renderer
    .create(
        <NotAvailableOffers />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
