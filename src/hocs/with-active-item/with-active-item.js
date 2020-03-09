import React, {
  PureComponent
} from "react";
import PropTypes from "prop-types";
import {
  offerPropTypes
} from "../../types.js";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this._setActiveElement = this._setActiveElement.bind(this);
    }

    _setActiveElement(item) {
      this.setState(() => {
        return {
          activeItem: item
        };
      });
    }

    componentWillUnmount() {
      this.setState({
        activeItem: undefined
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          handleActiveItem={this._setActiveElement}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    currentCity: PropTypes.string,
    offer: offerPropTypes,
    isHovered: PropTypes.bool,
  };

  return WithActiveItem;
};

export default withActiveItem;
