import React from 'react';
import { connect } from 'react-redux';
import DirectMessageForm from './directMessageForm';
import { getAllUsers } from '../../actions/usersActions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    users: state.entities.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(getAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessageForm);