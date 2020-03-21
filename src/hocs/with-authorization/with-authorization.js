import React, {PureComponent} from 'react';

const withAuthorization = (Component) => {
  class WithAuthorization extends PureComponent {
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
