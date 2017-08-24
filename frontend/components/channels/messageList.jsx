import React from 'react';
import MessageListItem from './messageListItem';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.pusher = new Pusher('f7f2cb393fa04fd5c8e3', {
      cluster: 'us2',
      encrypted: true,
    });
  }

  componentDidMount() {
    this.props.getAllMessages()
      .then(() => this.messagesToBottom());

    const channel = this.pusher.subscribe('main_channel');

    channel.bind('new_message', data => {
      this.props.getAllMessages()
        .then(() => this.messagesToBottom());
    });
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
