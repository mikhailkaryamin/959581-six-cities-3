import {
  shape,
  arrayOf,
  number,
  string,
  bool,
  instanceOf
} from "prop-types";

export const offerPropTypes = shape({
  id: number.isRequired,
  src: arrayOf(
      string.isRequired
  ).isRequired,
  price: number.isRequired,
  rating: number.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  mark: bool.isRequired,
  insideItems: arrayOf(
      string.isRequired
  ).isRequired,
  coordinate: arrayOf(
      number.isRequired
  ).isRequired
});

export const commentsPropTypes = shape({
  id: number.isRequired,
  user: shape({
    id: number.isRequired,
    is_Pro: bool.isRequired,
    name: string.isRequired,
    avatar_url: string.isRequired,
  }).isRequired,
  rating: number.isRequired,
  comment: string.isRequired,
  date: instanceOf(Date)
});

