import React from 'react';

class ErrorArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.length > 0) {
      this.setState({
        hidden: false,
      });
    } else  {
      this.setState({
        hidden: true,
      });
    }
  }

  render() {
    const { errors } = this.props;

    const errorsList = errors.map((error, idx) => {
      return (
        <span key={idx}>{error}</span>
      );
    });

    return (
      <div
        className={"error-area " + (this.state.hidden ? "hidden" : null)}
      >
        {errorsList}
      </div>
    );
  }
}

export default ErrorArea;
