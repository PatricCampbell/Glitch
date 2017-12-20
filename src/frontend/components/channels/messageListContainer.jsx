import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageList from './messageList';
import { getAllMessages,
  deleteMessage
} from '../../actions/messagesActions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    messages: state.entities.messages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllMessages: (channelId) => dispatch(getAllMessages(channelId)),
    deleteMessage: message => dispatch(deleteMessage(message)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageList));
