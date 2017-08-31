import React from 'react';
import MessageListContainer from './messageListContainer';
import MessageFormContainer from './messageFormContainer';
import MessageListHeaderContainer from './messageListHeaderContainer';

class MainChannel extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    const firstChannelId = Object.keys(nextProps.channels)[0];

    if ((Object.keys(nextProps.channels).length > 0) && Object.keys(nextProps.directMessages).length > 0 &&!Object.keys(nextProps.channels).includes(nextProps.match.params.channel_id)) {
      this.props.history.push(`/channels/${firstChannelId}`);
    }
  }

  render() {
    return (
      <div className='channel-container'>
        <MessageListContainer />
        <MessageListHeaderContainer />
        <MessageFormContainer />
      </div>
    );
  }
};

export default MainChannel;
