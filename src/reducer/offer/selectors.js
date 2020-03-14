import NameSpace from '../name-space.js';

export const getActiveOffer = (state) => {
  return state[NameSpace.OFFER].activeOffer;
};

export const getFocusOffer = (state) => {
  return state[NameSpace.OFFER].focusOffer;
};
