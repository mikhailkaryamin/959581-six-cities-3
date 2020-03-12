import {
  extend
} from '../../utils.js';
import {
  TypeSort
} from "../../consts.js";

const initialState = {
  currentSort: TypeSort.POPULAR,
};

const ActionType = {
  SET_CURRENT_SORT: `SET_CURRENT_SORT`,
};

const ActionCreator = {
  setCurrentSort: (sort) => ({
    type: ActionType.SET_CURRENT_SORT,
    payload: sort,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_SORT:
      return extend(state, {
        currentSort: action.payload,
      });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  ActionType,
};
