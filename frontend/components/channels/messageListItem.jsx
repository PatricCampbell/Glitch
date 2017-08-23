import React from 'react';

const MessageListItem = props => {
  const { body } = props.message;

  return (
    <ul>
      <li>{body}</li>
    </ul>
  );
};

export default MessageListItem;
