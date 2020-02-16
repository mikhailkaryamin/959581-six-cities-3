import {
  shape,
  arrayOf,
  number,
  string,
  bool
} from "prop-types";

export const offerPropTypes = shape({
  id: number.isRequired,
  src: arrayOf(
      string.isRequired
  ).isRequired,
  price: number.isRequired,
  rating: number.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  type: string.isRequired,
  mark: bool.isRequired,
  insideItems: arrayOf(
      string.isRequired
  ).isRequired,
});
