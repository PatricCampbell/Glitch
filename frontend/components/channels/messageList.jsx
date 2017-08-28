import React from 'react';
import MessageListItem from './messageListItem';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.pusher = new Pusher('42ee8e819840dd56e102', {
      cluster: 'us2',
      encrypted: true,
    });
  }

  componentDidMount() {
    const channelId = this.props.match.params.channel_id;

    this.props.getAllMessages(channelId)
      .then(() => this.messagesToBottom());
    
    const channel = this.pusher.subscribe('channel_' + channelId);

    channel.bind('new_message', data => {
      this.props.getAllMessages(channelId)
        .then(() => this.messagesToBottom());
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channel_id !== nextProps.match.params.channel_id) {
      this.props.getAllMessages(nextProps.match.params.channel_id)
        .then(() => this.messagesToBottom());
    }
  }

  componentWillUnmount() {
    this.pusher.unsubscribe('main_channel');
  }

  messagesToBottom() {
    const messagesDiv = document.querySelector('.messages-container');
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  render() {
    let messages = null;

    if (Object.values(this.props.messages).length !== 0) {
      messages = Object.values(this.props.messages).map(message => {
        return (
          <MessageListItem
            deleteMessage={this.props.deleteMessage}
            message={message}
            key={message.id}
          />
        );
      });
    }

    return (
      <div className='messages-container'>
        <ul className='message-list full-width'>
          {messages ? messages : null}
        </ul>
      </div>
    );
  }
}

export default MessageList;
