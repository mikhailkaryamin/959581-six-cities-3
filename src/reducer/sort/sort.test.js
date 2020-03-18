import {
  reducer,
  ActionType,
  ActionCreator,
} from './sort.js';
import {
  TypeSort
} from "../../consts.js";

describe(`Sort reducer works correctly`, () => {
  test(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      currentSort: TypeSort.POPULAR
    });
  });

  test(`Reducer should set currentSort`, () => {
    const prevCurrentSort = `prevSort`;
    const nextCurrentSort = `nextSort`;

    expect(reducer({
      currentSort: prevCurrentSort,
    }, {
      type: ActionType.SET_CURRENT_SORT,
      payload: nextCurrentSort,
    })).toEqual({
      currentSort: nextCurrentSort,
    });
  });
});

describe(`Action creators work correctly`, () => {
  test(`Action creator set current sort`, () => {
    const currentSort = `TestSort`;
    expect(ActionCreator.setCurrentSort(currentSort)).toEqual({
      type: ActionType.SET_CURRENT_SORT,
      payload: currentSort,
    });
  });
});
