import * as React from "react";
import {
  Subtract
} from "utility-types";

interface State {
  isHovered: boolean;
}

interface Props {
  onCardHover: () => void;
  onCardLeave: () => void;
}

interface InjectingProps {
  onCardHover: () => void;
  onCardLeave: () => void;
}

const withHover = (Component) => {
  type S = React.ComponentProps<typeof Component>;

  type T = Subtract<S, InjectingProps>;

  class WithHover extends React.PureComponent<T, State, Props> {
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
      this.props.onCardLeave();
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

  return WithHover;
};

export default withHover;
