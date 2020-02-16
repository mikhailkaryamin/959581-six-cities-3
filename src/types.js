import {
  shape,
  arrayOf,
  number,
  string
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
  mark: string,
});
