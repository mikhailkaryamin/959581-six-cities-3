import React, {
  PureComponent
} from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../../components/error-message/error-message.jsx';

const withErrorMessage = (Component) => {
  class WithErrorMessage extends PureComponent {
    render() {
      const {
        errorCode,
        onErrorReset,
      } = this.props;

      return (
        <React.Fragment>
          {errorCode && <ErrorMessage
            errorCode={errorCode}
            onErrorReset={onErrorReset}
          />}
          {errorCode || ``}
          <Component
            {...this.props}
          />
        </React.Fragment>
      );
    }
  }

  WithErrorMessage.propTypes = {
    errorCode: PropTypes.number.isRequired,
    onErrorReset: PropTypes.func.isRequired,
  };

  return WithErrorMessage;
};

export default withErrorMessage;
