import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ErrorMessage from './error-message';

const ERROR_CODE = 404;
const onResetError = jest.fn();

test(`Error message`, () => {
  const tree = renderer.create(
      <ErrorMessage
        errorCode={ERROR_CODE}
        onResetError={onResetError}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
