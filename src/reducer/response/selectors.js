import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.RESPONSE;

const getResponseStatusCode = (state) => state[NAME_SPACE].responseStatusCode;

export {
  getResponseStatusCode
};
