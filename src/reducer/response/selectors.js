import NameSpace from '../name-space.js';

const getResponseStatusCode = (state) => state[NameSpace.RESPONSE].responseStatusCode;

export {
  getResponseStatusCode
};
