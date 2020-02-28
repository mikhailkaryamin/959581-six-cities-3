import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {
  shallow
} from "enzyme";
import {
  PlaceCard
} from "./place-card.jsx";

const offer = {
  id: 123,
  src: [
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`,
    `img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
  ],
  price: 120,
  rating: 4,
  name: `Beautiful &amp; luxurious apartment at great location`,
  type: `Apartment`,
  mark: true,
  insideItems: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ],
  coordinate: [52.3909553943508, 4.85309666406198],
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Place card e2e tests`, () => {
  let placeCard;
  let handleHeaderOfferClick;
  let handlePlaceCardMouseEnter;
  let handlePlaceCardMouseLeave;

  beforeEach(() => {
    handleHeaderOfferClick = jest.fn();
    handlePlaceCardMouseEnter = jest.fn();
    handlePlaceCardMouseLeave = jest.fn();

    placeCard = shallow(
        <PlaceCard
          offer={
            offer
          }
          handleHeaderOfferClick={
            handleHeaderOfferClick
          }
          handlePlaceCardMouseEnter={
            handlePlaceCardMouseEnter
          }
          handlePlaceCardMouseLeave={
            handlePlaceCardMouseLeave
          }
        />
    );
  });

  test(`When you press click and send state offer`, () => {
    const headerOfferElement = placeCard.find(`.place-card__name`);
    headerOfferElement.simulate(`click`);
    expect(handleHeaderOfferClick.mock.calls[0][0]).toMatchObject(offer);
    expect(handleHeaderOfferClick.mock.calls.length).toBe(1);
  });

  test(`When you mouseenter and send state offer`, () => {
    const placeCardElement = placeCard.find(`.place-card`);
    placeCardElement.simulate(`mouseenter`);
    expect(handlePlaceCardMouseEnter.mock.calls[0][0]).toMatchObject(offer);
    expect(handlePlaceCardMouseEnter.mock.calls.length).toBe(1);
  });

  test(`When you mouseenter and send state offer`, () => {
    const placeCardElement = placeCard.find(`.place-card`);
    placeCardElement.simulate(`mouseleave`);
    expect(handlePlaceCardMouseLeave).toHaveBeenCalled();
    expect(handlePlaceCardMouseLeave.mock.calls.length).toBe(1);
  });
});

