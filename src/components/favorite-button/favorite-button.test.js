import React from 'react';
import renderer from 'react-test-renderer';
import {
  AuthorizationStatus
} from '../../reducer/user/user';
import {
  FavoriteButton
} from './favorite-button';

const onFavoriteClick = () => {};
const authStatus = AuthorizationStatus.AUTH;

test(`Render correctly favorite button`, () => {
  const tree = renderer.create(
      <FavoriteButton
        id={1}
        classModificator={`place-card`}
        width={25}
        height={25}
        isFavorite={true}
        onFavoriteClick={onFavoriteClick}
        authStatus={authStatus}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
