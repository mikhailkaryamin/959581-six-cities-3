import React, {
  PureComponent
} from 'react';
import {
  func,
  number,
} from 'prop-types';

const Styles = {
  ErrorMessage: {
    position: `fixed`,
    top: `5%`,
    right: `50%`,
    left: `50%`,
    zIndex: `50`,
    color: `#ffffff`,
    padding: `25px`,
    backgroundColor: `#FF6347`,
    borderRadius: `5px`,
  },
  header: {
    paddingBottom: `10px`,
  },
  closeButton: {
    position: `absolute`,
    top: `5px`,
    right: `5px`,
    zIndex: `10`,
    width: `10px`,
    height: `10px`,
    padding: `10px`,
    color: `#ffffff`,
    backgroundSize: `10px`,
    backgroundImage: `url(./img/close.svg)`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
  }
};

class ErrorMessage extends PureComponent {
  constructor(props) {
    super(props);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
    this._handleMessageClose = this._handleMessageClose.bind(this);
  }

  componentDidMount() {
    document.addEventListener(`keydown`, this._onEscKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this._onEscKeyDown);
  }

  _handleMessageClose() {
    this.props.onErrorReset();
  }

  _onEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      this.props.onErrorReset();
    }
  }

  render() {
    const {
      errorCode
    } = this.props;

    return (
      <div
        className="error-message"
        style={Styles.ErrorMessage}
      >
        <div className="error-message__header"
          style={Styles.header}
        >
          <b>Код ошибки: {errorCode}</b>
        </div>
        <div className="message__text">
          <p>Что-то пошло не так:(</p>
        </div>
        <button
          className="error-message__button"
          style={Styles.closeButton}
          onClick={this._handleMessageClose}></button>
      </div>
    );
  }
}

ErrorMessage.propTypes = {
  errorCode: number.isRequired,
  onErrorReset: func.isRequired,
};

export default ErrorMessage;

