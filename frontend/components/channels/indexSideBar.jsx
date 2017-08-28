import React from 'react';
import ChannelsListItem from './channelsListItem';

class IndexSideBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  };

  componentDidMount() {
    this.props.fetchAllChannels();
  }

  render() {
      const channels = Object.values(this.props.channels).map(channel => {
        return (
            <ChannelsListItem key={channel.id} channel={channel} />
        );
      });

    return (
      <div className='sidebar'>
        <h3 className='username-display'>
          Hello, {this.props.currentUser.username}
        </h3>
        <button
          className='logout-btn'
          onClick={this.handleClick}
        >
          Logout
        </button>
        <span className='channels-title'>
          <p>Channels</p>
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </span>
        <ul className='channels-list'>
          {channels}
        </ul>  
      </div>
    );
  }
}

export default IndexSideBar;