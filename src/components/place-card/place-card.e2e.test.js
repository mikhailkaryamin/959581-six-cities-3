import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {
  shallow
} from "enzyme";
import {
  ClassModificator
} from "../../consts.js";
import PlaceCard from "./place-card.jsx";

const offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    avatarUrl: `img/1.png`,
    id: 3,
    isPro: true,
    name: `Angelina`
  },
  id: 1,
  images: [`img/1.png`, `img/2.png`],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: `img/1.png`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
};

Enzyme.configure({
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
          offer={offer}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          classModificator={ClassModificator.CITIES}
        />
    );
  });

  test(`When you mouseenter and send state offer`, () => {
    const placeCardElement = placeCard.find(`.place-card`);
    placeCardElement.simulate(`mouseenter`);
    expect(onMouseEnter.mock.calls[0][0]).toMatchObject(offer);
    expect(onMouseEnter.mock.calls.length).toBe(1);
  });

  test(`When you mouseleave and send state offer`, () => {
    const placeCardElement = placeCard.find(`.place-card`);
    placeCardElement.simulate(`mouseleave`);
    expect(onMouseLeave).toHaveBeenCalled();
    expect(onMouseLeave.mock.calls.length).toBe(1);
  });
});

