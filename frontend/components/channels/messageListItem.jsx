import React from 'react';

const MessageListItem = props => {
  const { body } = props.message;

  return (
    <li className='message-item'>
      <div>
        <img src='http://placebear.com/36/36' />
      </div>
      <div className='message'>
        <span className='author-username bold'>
         {props.message.author.username}
        </span>
        <span className='message-body'>
          {body}
        </span>
      </div>  
    </li>
  );
};

export default MessageListItem;
