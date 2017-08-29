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
        {this.state.formState === 'shown' ? <ChannelFormContainer
          formType={this.state.formType}
          handleCloseForm={this.handleCloseForm}
        /> : null}
      </div>
    );
  }
}

export default IndexSideBar;