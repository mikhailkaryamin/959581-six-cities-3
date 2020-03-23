import {
  shape,
  arrayOf,
  number,
  string,
  bool
} from "prop-types";

const offerPropTypes = shape({
  id: number,
  src: arrayOf(
      string
  ),
  price: number,
  rating: number,
  name: string,
  type: string,
  mark: bool,
  insideItems: arrayOf(
      string
  ),
  coordinate: arrayOf(
      number
  )
});

const commentsPropTypes = shape({
  id: number,
  user: shape({
    id: number,
    isPro: bool,
    name: string,
    avatarUrl: string,
  }),
  rating: number,
  comment: string,
  date: string
});

const userPropTypes = shape({
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  isPro: bool,
});

export {
  offerPropTypes,
  commentsPropTypes,
  userPropTypes,
};
