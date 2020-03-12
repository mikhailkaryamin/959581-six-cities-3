import NameSpace from '../name-space.js';

export const getCurrentCity = (state) => {
  return state[NameSpace.CITY].currentCity;
};
