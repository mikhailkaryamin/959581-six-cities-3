import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./place-card-list.jsx";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import initialState from "../../mocks/initialState.js";


const mockStore = configureStore([]);
const modificatorClass = `cities__places-list tabs__content`;

it(`Render places-list correctly`, () => {
  const store = mockStore(initialState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <PlacesList
            modificatorClass={
              modificatorClass
            }
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
