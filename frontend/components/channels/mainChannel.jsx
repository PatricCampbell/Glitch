import React from 'react';
import MessageListContainer from './messageListContainer';
import MessageFormContainer from './messageFormContainer';
import MessageListHeaderContainer from './messageListHeaderContainer';

const MainChannel = props => {
  return (
    <div className='channel-container'>
      <MessageListContainer />
      <MessageListHeaderContainer />
      <MessageFormContainer />
    </div>
  );
};

export default MainChannel;
