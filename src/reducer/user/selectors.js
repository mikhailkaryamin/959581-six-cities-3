import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

const getUser = (state) => {
  return state[NAME_SPACE].user;
};

export {
  getAuthorizationStatus,
  getUser
};
