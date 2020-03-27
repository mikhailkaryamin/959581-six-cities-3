import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.SORT;

const getCurrentSort = (state) => {
  return state[NAME_SPACE].currentSort;
};

export {
  getCurrentSort,
};
