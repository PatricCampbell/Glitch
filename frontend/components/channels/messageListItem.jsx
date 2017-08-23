import React from 'react';

const MessageListItem = props => {
  const { body } = props.message;

  return (
    <li>
      <span className='author-username'>
        {props.message.author.username}
      </span>
      <span className='message-body'>
        {body}
      </span>
    </li>
  );
};

export default MessageListItem;
