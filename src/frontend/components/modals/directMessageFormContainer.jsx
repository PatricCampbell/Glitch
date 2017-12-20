import React from 'react';
import { connect } from 'react-redux';
import DirectMessageForm from './directMessageForm';
import { getAllUsers } from '../../actions/usersActions';
import { createDirectMessage } from '../../actions/directMessageActions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    users: state.entities.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(getAllUsers()),
    createDirectMessage: userList => dispatch(createDirectMessage(userList)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DirectMessageForm));