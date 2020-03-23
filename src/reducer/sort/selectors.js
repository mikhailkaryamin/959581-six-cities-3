import NameSpace from '../name-space.js';

const getCurrentSort = (state) => {
  return state[NameSpace.SORT].currentSort;
};

export {
  getCurrentSort,
};
