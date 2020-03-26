import * as React from 'react';
import {
  configure,
  mount
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  AuthorizationStatus
} from '../../reducer/user/user';
import {
  FavoriteButton
} from './favorite-button';

configure({
  adapter: new Adapter(),
});

const authStatus = AuthorizationStatus.AUTH;

describe(`FavoriteButton`, () => {
  it(`should favoriteButton pressed remove favorite`, () => {
    const onFavoriteClick = jest.fn();
    const wrapper = mount(
        <FavoriteButton
          id={1}
          classModificator={`place-card`}
          width={25}
          height={25}
          isFavorite={false}
          onFavoriteClick={onFavoriteClick}
          authStatus={authStatus}
        />
    );

    wrapper.find(`button`).at(0).simulate(`click`);
    expect(onFavoriteClick).toHaveBeenCalledTimes(1);
    expect(onFavoriteClick.mock.calls[0][0]).toBe(1);
    expect(onFavoriteClick.mock.calls[0][1]).toBe(false);
  });

  it(`should favoriteButton pressed add to favorites`, () => {
    const onFavoriteClick = jest.fn();
    const wrapper = mount(
        <FavoriteButton
          id={1}
          classModificator={`place-card`}
          width={25}
          height={25}
          isFavorite={true}
          onFavoriteClick={onFavoriteClick}
          authStatus={authStatus}
        />
    );

    wrapper.find(`button`).at(0).simulate(`click`);
    expect(onFavoriteClick).toHaveBeenCalledTimes(1);
    expect(onFavoriteClick.mock.calls[0][0]).toBe(1);
    expect(onFavoriteClick.mock.calls[0][1]).toBe(true);
  });
});
