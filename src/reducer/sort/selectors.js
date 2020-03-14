import NameSpace from '../name-space.js';

export const getCurrentSort = (state) => {
  return state[NameSpace.SORT].currentSort;
};
