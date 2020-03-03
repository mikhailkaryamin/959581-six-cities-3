import React, {
  PureComponent
} from "react";

const withToggle = (Component) => {
  class WithToggle extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false
      };
    }

    _handleToggleClick() {
      this.setState((state) => {
        return {
          isActive: !state.isActive
        };
      });
    }

    render() {
      const {
        isActive
      } = this.state;

      return (
        <Component
          {...this.props}
          isActive={
            isActive
          }
          onToggleClick={() => {
            this._handleToggleClick();
          }}
        />
      );
    }
  }

  WithToggle.propTypes = {};

  return WithToggle;
};

export default withToggle;
