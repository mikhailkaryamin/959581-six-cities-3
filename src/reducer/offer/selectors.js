import NameSpace from '../name-space.js';

const getActiveOffer = (state) => {
  return state[NameSpace.OFFER].activeOffer;
};

const getFocusOffer = (state) => {
  return state[NameSpace.OFFER].focusOffer;
};

export {
  getActiveOffer,
  getFocusOffer,
};
