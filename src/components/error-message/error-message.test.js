import React from 'react';
import renderer from 'react-test-renderer';
import ErrorMessage from './error-message.jsx';

test(`Error message`, () => {
  const tree = renderer.create(
      <ErrorMessage
        errorCode={401}
        onResetError={()=> {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
