import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import reviews from "./mocks/reviews.js";
import {
  createStore,
  applyMiddleware,
  compose,
} from "redux";
import {
  Provider,
} from "react-redux";
import thunk from 'redux-thunk';
import {
  reducer
} from "./reducers/reducer.js";
import {
  createAPI
} from './api.js';

const api = createAPI();

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

ReactDOM.render(
    <Provider store={
      store
    }>
      <App
        reviews = {
          reviews
        }
      />
    </Provider>,
    document.querySelector(`#root`)
);
