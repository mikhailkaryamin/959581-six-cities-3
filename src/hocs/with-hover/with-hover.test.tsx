import * as React from 'react';
import {
  shallow,
  configure
} from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';
import withHover from "./with-hover";

configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;
const MockComponentWrapped = withHover(MockComponent);

test(`with hover HOC`, () => {
  const onCardHover = jest.fn();
  const onCardLeave = jest.fn();

  const wrapper = shallow(
      <MockComponentWrapped
        onCardHover={onCardHover}
        onCardLeave={onCardLeave}
      />
  );

  wrapper.simulate(`mouseenter`);
  expect(onCardHover).toHaveBeenCalledTimes(1);

  wrapper.simulate(`mouseleave`);
  expect(onCardLeave).toHaveBeenCalledTimes(1);
});
