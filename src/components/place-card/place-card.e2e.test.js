import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount, shallow} from "enzyme";
import PlaceCard from "./place-card.jsx";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
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

const handlePlaceCardMouseLeave = () => {};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should headline button click and send state offer`, () => {
  const handleHeaderOfferClick = jest.fn();
  const handlePlaceCardMouseEnter = jest.fn();
  const store = mockStore({});
  const placeCard = shallow(
      <PlaceCard
        store={
          store
        }
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

  const placeCardElement = placeCard.dive().find(`.place-card`);
  placeCardElement.simulate(`mouseenter`);
  expect(handlePlaceCardMouseEnter.mock.calls[0][0]).toMatchObject(offer);
  expect(handlePlaceCardMouseEnter.mock.calls.length).toBe(1);

  const headerOfferElement = placeCard.dive().find(`.place-card__name`);
  headerOfferElement.simulate(`click`);
  expect(handleHeaderOfferClick.mock.calls[0][0]).toMatchObject(offer);
  expect(handleHeaderOfferClick.mock.calls.length).toBe(1);
});

