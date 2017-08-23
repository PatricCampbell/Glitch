import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author_id: this.props.currentUser.id,
      body: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendMessage(this.state)
      .then(() => {
        this.setState({
          author_id: this.props.currentUser.id,
          body: '',
        });
      });
  }

  handleChange(e) {
    this.setState({
      author_id: this.props.currentUser.id,
      body: e.currentTarget.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.body}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default MessageForm;
