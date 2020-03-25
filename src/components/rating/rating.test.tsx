import React from "react";
import renderer from "react-test-renderer";
import {
  ClassModificator
} from "../../consts";
import Rating from './rating';

describe(`Rating render correctly`, () => {
  test(`Rating place card render correctly`, () => {
    const tree = renderer
      .create(
          <Rating
            rating={3}
            classModificator={ClassModificator.PLACE_CARD}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Rating property render correctly`, () => {
    const tree = renderer
      .create(
          <Rating
            rating={3}
            classModificator={ClassModificator.PROPERTY}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

