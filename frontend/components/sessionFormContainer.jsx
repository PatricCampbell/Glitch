import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './sessionForm';
import { login, signup } from '../actions/sessionActions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.location.pathname,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: ownProps.location.pathname === '/login' ? (user) => dispatch(login(user)) : (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
