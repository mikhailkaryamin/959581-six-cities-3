import * as React from 'react';
import {
  Subtract
} from "utility-types";

interface State {
  login: string;
  password: string;
}

interface InjectingProps {
  login: string;
  password: string;
  onChange: () => void;
}

const withAuthorization = (Component) => {
  type S = React.ComponentProps<typeof Component>;
  type T = Subtract<S, InjectingProps>

  class WithAuthorization extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);
      this.state = {
        login: ``,
        password: ``
      };
      this._setDataUser = this._setDataUser.bind(this);
    }

    _setDataUser({currentTarget}) {
      switch (currentTarget.name) {
        case `email`:
          this.setState({
            login: currentTarget.value
          });
          break;
        case `password`:
          this.setState({
            password: currentTarget.value
          });
          break;
      }
    }

    render() {
      const {
        login,
        password
      } = this.state;

      return (
        <Component
          {...this.props}
          login={login}
          password={password}
          onChange={this._setDataUser}
        />
      );
    }
  }

  return WithAuthorization;
};

export default withAuthorization;
