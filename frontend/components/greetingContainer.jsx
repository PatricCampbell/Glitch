import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, login } from '../actions/sessionActions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
