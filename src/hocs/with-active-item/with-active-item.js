import React, {
  PureComponent
} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null
      };
    }

    _setActiveItem(item) {
      this.setState = () => {
        return {
          activeItem: item
        };
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          onClickItem={() => {
            this._setActiveItem();
          }}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
