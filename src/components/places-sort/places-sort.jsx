import React, {
  PureComponent
} from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";
import {
  setCurrentSort,
  toggleSortList
} from "../../actions/actions.js";
import {
  SORTING
} from "../../consts.js";

class PlacesSort extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleTypeClick,
      currentSort,
      isOpenSort,
      onSortButtonClick,
    } = this.props;

    return (
      <form
        className="places__sorting"
        action="#"
        method="get"
        onClick={() => {
          onSortButtonClick();
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
        <ul className={`places__options places__options--custom ${isOpenSort ? `places__options--opened` : ``}`
        }
        >
          {
            SORTING.map((sort) =>
              sort !== currentSort && <li
                className="places__option"
                key={sort}
                tabIndex="0"
                onClick={()=> {
                  handleTypeClick(sort);
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
  isOpenSort: PropTypes.bool.isRequired,
  handleTypeClick: PropTypes.func.isRequired,
  onSortButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSort: state.currentSort,
  isSortOpen: state.isSortOpen,
});

const mapDispatchToProps = (dispatch) => ({
  handleTypeClick(sort) {
    dispatch(setCurrentSort(sort));
  },
  handleListClick(isSortOpen) {
    dispatch(toggleSortList(isSortOpen));
  },
});

export {
  PlacesSort
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesSort);
