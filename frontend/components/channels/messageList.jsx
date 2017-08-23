import React from 'react';
import MessageListItem from './messageListItem';

class MessageList extends React.Component {
  componentDidMount() {
    this.props.getAllMessages();
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
      <ul>
        {messages ? messages : null}
      </ul>
    );
  }
}

export default MessageList;
