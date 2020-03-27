import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.OFFER;

const getActiveOffer = (state) => {
  return state[NAME_SPACE].activeOffer;
};

const getFocusOffer = (state) => {
  return state[NAME_SPACE].focusOffer;
};

export {
  getActiveOffer,
  getFocusOffer,
};
