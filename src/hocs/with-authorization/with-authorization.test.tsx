import * as React from 'react';
import {
  configure,
  shallow
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withAuthorization from './with-authorization';

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const MockComponentWrapped = withAuthorization(MockComponent);
const mockLogin = {
  currentTarget: {
    value: `vasya@mail.ru`,
    name: `email`
  }
};

const mockPassword = {
  currentTarget: {
    value: `ezPz`,
    name: `password`
  }
};

describe(`withAuthorization HOC`, () => {
  test(`should render wrapped component with initial state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );
    expect(wrapper.props().login).toHaveLength(0);
    expect(wrapper.props().password).toHaveLength(0);
  });

  test(`should update wrapped component with user data`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );
    wrapper.props().onChange(mockLogin);
    expect(wrapper.props().login).toEqual(`vasya@mail.ru`);
    wrapper.props().onChange(mockPassword);
    expect(wrapper.props().password).toEqual(`ezPz`);
  });
});
