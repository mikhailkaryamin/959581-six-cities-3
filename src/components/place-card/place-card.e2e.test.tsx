import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  shallow
} from 'enzyme';
import {
  ClassModificator
} from '../../consts';
import {
  ONE_OFFER,
} from '../../mocks/constsMockTest';
import PlaceCard from './place-card';

configure({
  adapter: new Adapter(),
});

describe(`Place card e2e tests`, () => {
  let placeCard;
  let onMouseEnter;
  let onMouseLeave;

  beforeEach(() => {
    onMouseEnter = jest.fn();
    onMouseLeave = jest.fn();

    placeCard = shallow(
        <PlaceCard
          offer={ONE_OFFER}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          classModificator={ClassModificator.CITIES}
        />
    );
  });

  test(`When you mouseenter and send state offer`, () => {
    const placeCardElement = placeCard.find(`.place-card`);
    placeCardElement.simulate(`mouseenter`);
    expect(onMouseEnter.mock.calls[0][0]).toMatchObject(ONE_OFFER);
    expect(onMouseEnter.mock.calls.length).toBe(1);
  });

  test(`When you mouseleave and send state offer`, () => {
    const placeCardElement = placeCard.find(`.place-card`);
    placeCardElement.simulate(`mouseleave`);
    expect(onMouseLeave).toHaveBeenCalled();
    expect(onMouseLeave.mock.calls.length).toBe(1);
  });
});

