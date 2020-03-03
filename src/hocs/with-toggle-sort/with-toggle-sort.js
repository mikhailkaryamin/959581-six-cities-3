import React, {
  PureComponent
} from "react";

const withToggleSort = (Component) => {
  class WithToggleSort extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpenSort: false
      };
    }

    _setSortOpen() {
      this.setState((state) => {
        return {
          isOpenSort: !state.isOpenSort
        };
      });
    }

    render() {
      const {
        isOpenSort
      } = this.state;

      return (
        <Component
          {...this.props}
          isOpenSort={
            isOpenSort
          }
          onSortButtonClick={() => {
            this._setSortOpen();
          }}
        />
      );
    }
  }

  WithToggleSort.propTypes = {};

  return WithToggleSort;
};

export default withToggleSort;
