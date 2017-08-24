import React from 'react';
import MessageListContainer from './messageListContainer';
import MessageFormContainer from './messageFormContainer';

const MainChannel = props => {
  return (
    <div className='channel-container'>
      <MessageListContainer />
      <MessageFormContainer />
    </div>
  );
};

export default MainChannel;
