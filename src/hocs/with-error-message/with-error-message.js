import React, {
  PureComponent
} from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../../components/error-message/error-message.jsx';

const withErrorMessage = (Component) => {
  class WithErrorMessage extends PureComponent {
    _isErrorCode(responseStatus) {
      if (responseStatus === null) {
        return false;
      }

      const firstNumber = responseStatus
        .toString()[0];

      if (firstNumber === `4`) {
        return true;
      } else {
        return false;
      }
    }

    render() {
      const {
        responseStatus,
        onResetError,
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

  WithErrorMessage.propTypes = {
    responseStatus: PropTypes.number,
    onResetError: PropTypes.func.isRequired,
  };

  return WithErrorMessage;
};

export default withErrorMessage;
