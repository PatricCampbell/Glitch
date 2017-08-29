import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageListHeader from './messageListHeader';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    channels: state.entities.channels,
  };
};

export default withRouter(connect(mapStateToProps, null)(MessageListHeader));
