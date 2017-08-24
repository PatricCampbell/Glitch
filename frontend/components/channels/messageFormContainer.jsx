import React from 'react';
import { connect } from 'react-redux';
import MessageForm from './messageForm';
import { sendMessage } from '../../actions/messagesActions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: message => dispatch(sendMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
