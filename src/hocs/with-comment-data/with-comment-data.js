import React,
{
  PureComponent
} from 'react';
import {
  func,
  number,
} from 'prop-types';

const withCommentData = (Component) => {
  class WithCommentData extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: 0,
        comment: ``
      };
      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.countComments < this.props.countComments) {
        this.setState({
          rating: 0,
          comment: ``
        });
      }
    }

    _handleChange({currentTarget}) {
      switch (currentTarget.name) {
        case `rating`:
          this.setState({
            rating: parseInt(currentTarget.value, 10),
          });
          return;
        case `review`:
          this.setState({
            comment: currentTarget.value
          });
      }
    }

    _handleSubmit(evt) {
      evt.preventDefault();

      const {
        rating,
        comment,
      } = this.state;
      const {
        onCommentSubmit
      } = this.props;

      onCommentSubmit({
        rating,
        text: comment,
      });
    }

    render() {
      const {
        comment,
        rating,
      } = this.state;

      return (
        <Component
          {...this.props}
          comment={comment}
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
          rating={rating}
        />
      );
    }
  }

  WithCommentData.propTypes = {
    countComments: number.isRequired,
    onCommentSubmit: func.isRequired,
  };

  return WithCommentData;
};

export default withCommentData;
