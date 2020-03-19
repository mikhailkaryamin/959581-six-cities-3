import React from 'react';
import renderer from 'react-test-renderer';
import ErrorMessage from './error-message.jsx';

test(`Error message`, () => {
  const tree = renderer.create(
      <ErrorMessage
        errorCode={401}
        onErrorReset={()=> {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
