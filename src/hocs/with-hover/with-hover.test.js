import React from "react";
import {
  shallow,
  configure
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withHover from "./with-hover.js";

configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;
const MockComponentWrapped = withHover(MockComponent);

test(`with hover HOC`, () => {
  const onCardHover = jest.fn();

  const wrapper = shallow(
      <MockComponentWrapped
        onCardHover={onCardHover}
      />
  );

  wrapper.simulate(`mouseenter`);
  expect(onCardHover).toHaveBeenCalledTimes(1);

  wrapper.simulate(`mouseleave`);
  expect(onCardHover).toHaveBeenCalledTimes(2);
});