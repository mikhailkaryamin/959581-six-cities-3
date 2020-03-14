import {
  shape,
  arrayOf,
  number,
  string,
  bool
} from "prop-types";

export const offerPropTypes = shape({
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

export const commentsPropTypes = shape({
  id: number.isRequired,
  user: shape({
    id: number.isRequired,
    isPro: bool.isRequired,
    name: string.isRequired,
    avatarUrl: string.isRequired,
  }).isRequired,
  rating: number.isRequired,
  comment: string.isRequired,
  date: string
});

