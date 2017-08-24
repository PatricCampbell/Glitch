import React from 'react';

const MessageListItem = props => {
  const { body } = props.message;

  return (
    <li className='message'>
      <span className='author-username bold'>
        {props.message.author.username}
      </span>
      <span className='message-body'>
        {body}
      </span>
    </li>
  );
};

export default MessageListItem;
