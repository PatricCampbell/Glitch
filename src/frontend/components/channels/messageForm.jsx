import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author_id: this.props.currentUser.id,
      channel_id: this.props.match.params.channel_id,
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
          channel_id: this.props.match.params.channel_id,      
          body: '',
        });
      });
  }

  handleChange(e) {
    this.setState({
      author_id: this.props.currentUser.id,
      channel_id: this.props.match.params.channel_id,      
      body: e.currentTarget.value,
    });
  }

  render() {
    return (
      <form
        className='message-form'
        onSubmit={this.handleSubmit}>
        <input
          placeholder='Hit Enter to Send Message'
          className='message-input full-width'
          autoFocus='autofocus'
          type='text'
          value={this.state.body}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default MessageForm;
