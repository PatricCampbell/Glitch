import React from 'react';
import ChannelsListItem from './channelsListItem';
import ChannelFormContainer from '../modals/channelFormContainer';

class IndexSideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formState: 'hidden',
      formType: null,
    };

    this.pusher = new Pusher('42ee8e819840dd56e102', {
      cluster: 'us2',
      encrypted: true,
    });

    this.handleLogout = this.handleLogout.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleCreate(e) {
    e.preventDefault();
    this.setState({
      formState: 'shown',
      formType: 'create',
    });
  }

  handleCloseForm(e) {
    this.setState({
      formState: 'hidden',
      formType: null,
    }, () => {
      this.props.fetchAllChannels();
    });
  }

  componentDidMount() {
    this.props.fetchAllChannels();
    this.props.fetchAllDirectMessages(this.props.currentUser);

    const channel = this.pusher.subscribe('channels');
    
    channel.bind('new_channel', data => {
      this.props.fetchAllChannels();
    });
  }

  render() {
    const channels = Object.values(this.props.channels).map(channel => {
      return (
        <ChannelsListItem key={channel.id} channel={channel} />
      );
    });
    
    const directMessages = Object.values(this.props.directMessages).map(dm => {
      return (
        <ChannelsListItem key={dm.id} channel={dm} />
      );
    });

    return (
      <div className='sidebar'>
        <h3 className='username-display'>
          Hello, {this.props.currentUser.username}
        </h3>
        <button
          className='danger-btn'
          onClick={this.handleLogout}
        >
          Logout
        </button>
        <span className='channels-title'>
          <p>Channels</p>
          <i
            className="fa fa-plus-circle"
            aria-hidden="true"
            onClick={this.handleCreate}
          >
          </i>
        </span>
        <ul className='channels-list'>
          {channels}
        </ul>
        <span className='dms-title'>
          <p>Direct Messages</p>
          <i
            className="fa fa-plus-circle"
            aria-hidden="true"
            onClick={this.handleCreate}
          >
          </i>
        </span>
        <ul className='dms-list'>
          {directMessages}
        </ul>
        {this.state.formState === 'shown' ? <ChannelFormContainer
          formType={this.state.formType}
          handleCloseForm={this.handleCloseForm}
        /> : null}
      </div>
    );
  }
}

export default IndexSideBar;