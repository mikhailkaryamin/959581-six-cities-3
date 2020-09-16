import * as React from 'react';
import * as CSS from 'csstype';

interface Props {
  errorCode: number;
  onResetError: () => void;
}

type CSSProps = {
  errorMessage: CSS.Properties;
  header: CSS.Properties;
  closeButton: CSS.Properties;
}

const Styles: CSSProps = {
  errorMessage: {
    position: `fixed`,
    top: `5%`,
    right: `50%`,
    left: `50%`,
    zIndex: 50,
    width: `250px`,
    color: `#ffffff`,
    padding: `25px`,
    backgroundColor: `rgba(255, 99, 71, 0.75)`,
    borderRadius: `5px`,
  },
  header: {
    paddingBottom: `10px`,
  },
  closeButton: {
    position: `absolute`,
    top: `5px`,
    right: `5px`,
    zIndex: 10,
    width: `10px`,
    height: `10px`,
    padding: `10px`,
    color: `#ffffff`,
    backgroundSize: `10px`,
    backgroundImage: `url(`/img/close.svg`)`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
  }
};

class ErrorMessage extends React.PureComponent<Props, {}> {
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
    this.props.onResetError();
  }

  _onEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      this.props.onResetError();
    }
  }

  render() {
    const {
      errorCode
    } = this.props;

    return (
      <div
        className="error-message"
        style={Styles.errorMessage}
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

export default ErrorMessage;

