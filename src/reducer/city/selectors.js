import NameSpace from '../name-space.js';

const getCurrentCity = (state) => {
  return state[NameSpace.CITY].currentCity;
};

export {
  getCurrentCity,
};
