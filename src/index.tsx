import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createStore,
  applyMiddleware,
} from "redux";
import {
  Provider,
} from "react-redux";
import {
  composeWithDevTools
} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import App from "./components/app/app";
import reducer from "./reducer/reducer";
import {
  Operation as DataOperation
} from "./reducer/data/data";

import {
  createAPI
} from './api';
import {
  Operation as UserOperation,
  ActionCreator,
  AuthorizationStatus
} from "./reducer/user/user";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadOffers());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={
      store
    }>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
