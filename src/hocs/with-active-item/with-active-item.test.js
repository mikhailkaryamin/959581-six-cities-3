import React from "react";
import {
  configure,
  shallow,
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item.js";

configure({
  adapter: new Adapter()
});

const MockComponent = () => (<div />);
const MockComponentWrapped = withActiveItem(MockComponent);

test(`withActiveItem HOC`, () => {
  const wrapper = shallow(
      <MockComponentWrapped />
  );
  expect(wrapper.html()).not.toBe(null);
});

