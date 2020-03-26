import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ErrorMessage from './error-message';

const onResetError = jest.fn();

test(`Error message`, () => {
  const tree = renderer.create(
      <ErrorMessage
        errorCode={401}
        onResetError={onResetError}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
