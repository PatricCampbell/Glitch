import React from 'react';

const MessageListItem = props => {
  const { body, sentTime } = props.message;
  const jsSentTime = new Date(sentTime);
  const todaysDate = new Date();

  const formattedSentTime = jsSentTime.toDateString() === todaysDate.toDateString() ? jsSentTime.toLocaleTimeString([],
    { hour: '2-digit', minute: '2-digit' }) : `${jsSentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ${jsSentTime.toDateString()}`;

  return (
    <li className='message-item'>
      <div>
        <img src={`${props.message.author.avatar_url}`} width='36' height='36' />
      </div>
      <div className='message'>
        <span className='author-username bold'>
         {props.message.author.username}
         <span className='message-time'>
            {formattedSentTime}
         </span> 
        </span>
        <span className='message-body'>
          {body}
        </span>
      </div>  
    </li>
  );
};

export default MessageListItem;
