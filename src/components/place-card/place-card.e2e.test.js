import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {
  shallow
} from "enzyme";
import PlaceCard from "./place-card.jsx";

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
  description: `An independent House, strategically located between Rembrand Square and National Opera,`
  + ` but where the bustle of the city comes to rest in this alley flowery and colorful.`,
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
  city: {
    name: `Paris`
  }
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Place card e2e tests`, () => {
  let placeCard;
  let handleHeaderOfferClick;
  let onMouseEnter;
  let onMouseLeave;
  let handleActiveItem;

  beforeEach(() => {
    handleHeaderOfferClick = jest.fn();
    handleActiveItem = jest.fn();
    onMouseEnter = jest.fn();
    onMouseLeave = jest.fn();

    placeCard = shallow(
        <PlaceCard
          offer={offer}
          handleHeaderOfferClick={handleHeaderOfferClick}
          handleActiveItem={handleActiveItem}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
    );
  });

  test(`When you press click and send state offer`, () => {
    const headerOfferElement = placeCard.find(`.place-card__name`);
    headerOfferElement.simulate(`click`);
    expect(handleHeaderOfferClick.mock.calls[0][0]).toMatchObject(offer);
    expect(handleHeaderOfferClick.mock.calls.length).toBe(1);
  });

  test(`When you press click and send active item`, () => {
    const headerOfferElement = placeCard.find(`.place-card__name`);
    headerOfferElement.simulate(`click`);
    expect(handleActiveItem.mock.calls[0][0]).toMatchObject(offer);
    expect(handleActiveItem.mock.calls.length).toBe(1);
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

