import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {
  AuthorizationStatus
} from '../../reducer/user/user';
import {
  ClassModificator
} from '../../consts';
import {
  FavoriteButton
} from './favorite-button';

const onFavoriteClick = jest.fn();
const authStatus = AuthorizationStatus.AUTH;

test(`Render correctly favorite button`, () => {
  const tree = renderer.create(
      <FavoriteButton
        id={1}
        classModificator={ClassModificator.PLACE_CARD}
        width={25}
        height={25}
        isFavorite={true}
        onFavoriteClick={onFavoriteClick}
        authStatus={authStatus}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
