import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageListHeader from './messageListHeader';
import { editChannel, deleteChannel } from '../../actions/channelActions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    channels: state.entities.channels,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editChannel: channel => dispatch(editChannel(channel)),
    deleteChannel: channel => dispatch(deleteChannel(channel)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageListHeader));
