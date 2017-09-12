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
      userMenuState: 'hidden',
    };

    this.pusher = new Pusher('42ee8e819840dd56e102', {
      cluster: 'us2',
      encrypted: true,
    });

    this.handleLogout = this.handleLogout.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleUserMenuToggle = this.handleUserMenuToggle.bind(this);
    this.handleCreateDirectMessage = this.handleCreateDirectMessage.bind(this);
    this.handleCloseUserMenu = this.handleCloseUserMenu.bind(this);
  }

  handleUserMenuToggle(e) {
    if (this.state.userMenuState === 'hidden') {
      document.addEventListener('click', this.handleCloseUserMenu, false)

      this.setState({
        userMenuState: 'shown',
      });
    } else {
      this.setState({
        userMenuState: 'hidden',
      });
    }
  }

  handleCloseUserMenu(e) {
    document.removeEventListener('click', this.handleCloseUserMenu, false)

    this.setState({
      userMenuState: 'hidden',
    });
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
      this.props.fetchAllDirectMessages(this.props.currentUser);
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
        <div className='username-area' onClick={this.handleUserMenuToggle}>
          <h3 className='username-display'>
            <i className='fa fa-circle' aria-hidden='true'></i>
            {this.props.currentUser.username}
          </h3>
          {this.state.userMenuState === 'shown' ? <div className='user-menu'>
            <ul className='user-menu-list'>
              <li className='user-menu-name-area'>
                <img src={this.props.currentUser.avatar}
                width='36px'
                height='36px'
                className='avatar'
              />
              <h3>{this.props.currentUser.username}</h3>
              </li>
              <li className='signout' onClick={this.handleLogout}>Sign out of Glitch</li>
            </ul>
          </div> : null}
        </div>
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
