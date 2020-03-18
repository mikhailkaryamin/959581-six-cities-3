import React,
{
  PureComponent
} from 'react';
import PropTypes from 'prop-types';

const withRating = (Component) => {
  class WithRating extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: 0,
        comment: ``
      };
      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
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

    _handleSubmit() {
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
        rating,
        comment
      } = this.state;
      return (
        <Component
          {...this.props}
          rating={rating}
          comment={comment}
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
      );
    }
  }

  WithRating.propTypes = {
    onCommentSubmit: PropTypes.func.isRequired,
  };

  return WithRating;
};

export default withRating;
