import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import reviews from "./mocks/reviews.js";
import {
  createStore
} from "redux";
import {
  Provider
} from "react-redux";
import {
  reducer
} from "./reducers/reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
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
