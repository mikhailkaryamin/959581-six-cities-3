import React from "react";
import renderer from "react-test-renderer";
import ReviewsForm from "./reviews-form.jsx";

test(`Render reviews form`, () => {
  const tree = renderer
    .create(
        <ReviewsForm />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
