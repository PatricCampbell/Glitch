import React from 'react';
import { connect } from 'react-redux';
import MessageList from './messageList';
import { getAllMessages,
  deleteMessage } from '../../actions/messagesActions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    messages: state.entities.messages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllMessages: () => dispatch(getAllMessages()),
    deleteMessage: message => dispatch(deleteMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
