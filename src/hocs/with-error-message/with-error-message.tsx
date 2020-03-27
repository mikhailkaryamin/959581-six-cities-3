import * as React from 'react';
import ErrorMessage from '../../components/error-message/error-message';

const withErrorMessage = (Component) => {
  type S = React.ComponentProps<typeof Component>;

  class WithErrorMessage extends React.PureComponent<S, {}> {
    _isErrorCode(responseStatus) {
      if (responseStatus === null) {
        return false;
      }

      const firstNumber = responseStatus
        .toString()[0];

      if (firstNumber === `2`) {
        return false;
      } else {
        return true;
      }
    }

    render() {
      const {
        onResetError,
        responseStatus,
      } = this.props;

      return (
        <React.Fragment>
          {this._isErrorCode(responseStatus) && <ErrorMessage
            errorCode={responseStatus}
            onResetError={onResetError}
          />}
          {this._isErrorCode(responseStatus) || ``}
          <Component
            {...this.props}
          />
        </React.Fragment>
      );
    }
  }

  return WithErrorMessage;
};

export default withErrorMessage;
