import React from 'react';
import {
  configure,
  mount,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withErrorMessage from './with-error-message.js';

configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;
const mockFn = () => {};
const MockComponentWrapped = withErrorMessage(MockComponent);

describe(`withMessage HOC`, () => {
  test(`withMessage render correctly with error message`, () => {
    const wrapper = mount(
        <MockComponentWrapped
          responseStatus={404}
          onResetError={mockFn}
        />
    );
    expect(wrapper.exists(`.error-message`)).toBe(true);
    expect(wrapper.find(`.error-message__header`).text()).toBe(`Код ошибки: 404`);
  });

  test(`withMessage render correctly without error message`, () => {
    const wrapper = mount(
        <MockComponentWrapped
          responseStatus={0}
          onResetError={mockFn}
        />
    );
    expect(wrapper.exists(`.error-message`)).toBe(false);
  });
});
