import React from 'react';
import ErrorArea from '../errorArea';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    if (!this.props.channel) {
      this.state = {
        name: '',
        description: '',
        creator_id: this.props.currentUser.id,
        id: null,
      };
    } else {
      this.state = {
        name: this.props.channel.name,
        description: this.props.channel.description,
        creator_id: this.props.channel.creator_id,
        id: this.props.channel.id,
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(this.state)
      .then(channel => {
        this.props.handleCloseForm(e);
        if (this.props.formType === 'Create') {
          this.props.history.push(`/channels/${channel.channel.id}`);
        }
      });
  }

  handleClose(e) {
    this.props.handleCloseForm(e);
  }

  handleInput(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  render() {
    return (
      <div className='modal'>
        <form
          className='form-container channel-form'
          onSubmit={this.handleSubmit} >
          <h3>
            {this.props.formType} Channel
          </h3>
          <label>Channel Name
            <input
              type='text'
              value={this.state.name}
              onChange={this.handleInput('name')}
            />
          </label>
          <label>Description
            <input
              type='text'
              value={this.state.description}
              onChange={this.handleInput('description')}
            />
          </label>
          <div className='btn-area'>
            <button className='danger-btn' onClick={this.handleClose} >
              Cancel
            </button>
            <button type='submit' className='submit-btn'>
              {this.props.submitMessage}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ChannelForm;
