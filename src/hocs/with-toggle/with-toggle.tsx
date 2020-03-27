import * as React from 'react';
import {
  Subtract
} from "utility-types";

interface State {
  isActive: boolean;
}

interface InjectingProps {
  isActive: boolean;
  onToggleClick: () => void;
}

const withToggle = (Component) => {
  type S = React.ComponentProps<typeof Component>;
  type T = Subtract<S, InjectingProps>;

  class WithToggle extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false
      };
      this._handleToggleClick = this._handleToggleClick.bind(this);
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
          isActive={isActive}
          onToggleClick={this._handleToggleClick}
        />
      );
    }
  }

  return WithToggle;
};

export default withToggle;
