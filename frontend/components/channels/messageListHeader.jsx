import React from 'react';
import ChannelFormContainer from '../modals/channelFormContainer';

class MessageListHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channel: null,
      formState: 'hidden',
      formType: 'edit',
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      channel: nextProps.channels[nextProps.match.params.channel_id]
    })
  }

  handleDelete(e) {
    props.deleteChannel(channel)
      .then(() => {
        const firstChannelId = Object.keys(props.channels)[0];
        props.history.push(`/channels/${firstChannelId}`)
      });
  }

  handleEdit(e) {
    this.setState({
      formState: 'shown',
    });
  }

  handleCloseForm(e) {
    this.setState({
      formState: 'hidden',
    });
  }

  render() {
    if (this.state.channel) {
      return (
        <div className='message-list-header'>
          <p className='bold'>
            # {this.state.channel.name}
          </p>
          <p>
            {this.state.channel.description}
          </p>
          {this.state.channel.creator_id === this.props.currentUser.id &&
            <div>  
              <button onClick={this.handleEdit}>Edit
              </button>
              <button onClick={this.handleDelete}>Delete
              </button>
            </div>
          }
          {this.state.formState === 'shown' ? <ChannelFormContainer
            formType={this.state.formType}
            handleCloseForm={this.handleCloseForm}
            channel={this.state.channel}
          /> : null}
        </div>
      );
    } else {
      return (
        <div className='message-list-header'>
        </div>
      );
    }
  } 
};

export default MessageListHeader;