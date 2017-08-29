import React from 'react';

const MessageListHeader = props => {
  const channel = props.channels[props.match.params.channel_id];
  
  if (channel) {
    return (
      <div className='message-list-header'>
        <p className='bold'>
          # {channel.name}
        </p>
        <p>
          {channel.description}
        </p>
        {channel.creator_id === props.currentUser.id &&
          <div>  
            <button>Edit
            </button>
            <button>Delete
            </button>
          </div>
        }
      </div>
    );
  } else {
    return (
      <div className='message-list-header'>
      </div>
    );
  }
};

export default MessageListHeader;