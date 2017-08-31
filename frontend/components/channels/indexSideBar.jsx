import React from 'react';
import ChannelsListItem from './channelsListItem';
import ChannelFormContainer from '../modals/channelFormContainer';
import DirectMessageFormContainer from '../modals/directMessageFormContainer';

class IndexSideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channelFormState: 'hidden',
      channelFormType: null,
      directMessageFormState: 'hidden',
    };

    this.pusher = new Pusher('42ee8e819840dd56e102', {
      cluster: 'us2',
      encrypted: true,
    });

    this.handleLogout = this.handleLogout.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleCreateDirectMessage = this.handleCreateDirectMessage.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleCreate(e) {
    e.preventDefault();
    this.setState({
      channelFormState: 'shown',
      channelFormType: 'create',
    });
  }

  handleCreateDirectMessage(e) {
    e.preventDefault();
    this.setState({
      directMessageFormState: 'shown',
    });
  }

  handleCloseForm(e) {
    this.setState({
      channelFormState: 'hidden',
      channelFormType: null,
      directMessageFormState: 'hidden',
    }, () => {
      this.props.fetchAllChannels();
      this.props.fetchAllDirectMessages(this.props.currentUser);
    });
  }

  componentDidMount() {
    this.props.fetchAllChannels();
    this.props.fetchAllDirectMessages(this.props.currentUser);

    const channel = this.pusher.subscribe('channels');
    const directMessage = this.pusher.subscribe('direct_messages');
    
    channel.bind('new_channel', data => {
      this.props.fetchAllChannels();
    });

    directMessage.bind('new_direct_message', data => {
      this.props.fetchAllDirectMessages();
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
            onClick={this.handleCreateDirectMessage}
          >
          </i>
        </span>
        <ul className='dms-list'>
          {directMessages}
        </ul>
        {this.state.channelFormState === 'shown' ? <ChannelFormContainer
          formType={this.state.channelFormType}
          handleCloseForm={this.handleCloseForm}
        /> : null}
        {this.state.directMessageFormState === 'shown' ? <DirectMessageFormContainer
          handleCloseForm={this.handleCloseForm}
        /> : null}
      </div>
    );
  }
}

export default IndexSideBar;