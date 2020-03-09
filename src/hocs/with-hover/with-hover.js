import React, {
  PureComponent
} from "react";
import PropTypes from "prop-types";

const withHover = (Component) => {
  class WithHover extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isHovered: false,
      };
      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    _handleMouseEnter(element) {
      this.setState({
        isHovered: true
      });
      this.props.onCardHover(element);
    }

    _handleMouseLeave() {
      this.setState({
        isHovered: false,
      });
      this.props.onCardHover(undefined);
    }

    render() {
      return (
        <Component
          {...this.props}
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}
        />
      );
    }
  }

  WithHover.propTypes = {
    onCardHover: PropTypes.func.isRequired,
  };

  return WithHover;
};

export default withHover;
