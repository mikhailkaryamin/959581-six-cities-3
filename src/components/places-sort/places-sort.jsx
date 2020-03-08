import React, {
  PureComponent
} from "react";
import PropTypes from "prop-types";
import {
  SORTING
} from "../../consts.js";

class PlacesSort extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      currentSort,
      isActive,
      onToggleClick,
      handleSortChange
    } = this.props;

    return (
      <form
        className="places__sorting"
        action="#"
        method="get"
        onClick={() => {
          onToggleClick();
        }}
      >
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0">
          {
            currentSort
          }
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isActive ? `places__options--opened` : ``}`
        }
        >
          {
            SORTING.map((sort) =>
              sort !== currentSort && <li
                className="places__option"
                key={sort}
                tabIndex="0"
                onClick={()=> {
                  handleSortChange(sort);
                }}
              >
                {sort}
              </li>
            )
          }
        </ul>
      </form>
    );
  }
}

PlacesSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

export default PlacesSort;
