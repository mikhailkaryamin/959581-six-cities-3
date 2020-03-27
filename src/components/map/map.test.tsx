import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {
  OFFERS,
  ONE_OFFER,
} from '../../mocks/constsMockTest';
import Map from "./map";

test(`Render map correctly`, () => {
  const tree = renderer
    .create(
        <Map
          currentCityOffers={OFFERS}
          focusOffer={ONE_OFFER}
        />, {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
